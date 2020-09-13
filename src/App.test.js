import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import SearchMovieForm from './components/SearchMovieForm';
import Poster from './components/Poster';
import Spinner from "./components/Spinner";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import SearchResult from "./components/SearchResult";

configure({adapter: new Adapter()});

test('renders movie database homepage', () => {
  const { getByText } = render(<App />);
  const companyName = getByText(/Zoosh/i);
  expect(companyName).toBeInTheDocument();
});

test('homepage_has_search_text_label', () => {
  const wrapper = mount(<App />);
  const searchText = <label>Search for movies: </label>;
  expect(wrapper.contains(searchText)).toEqual(true);
});

test('renders_search_button', () => {
  const wrapper = mount(<App />);
  expect(wrapper.contains("Search")).toEqual(true);

});

test('renders_reset_button', () => {
  const wrapper = mount(<App />);
  expect(wrapper.contains("Reset")).toEqual(true);

});

it('renders the search result component', () => {
  const movieTitle = 'Columbo';
  const isLoading = false;
  const searchResult= [];
  const props = {movieTitle, searchResult, isLoading};
  const renderedComponent = shallow(<SearchMovieForm {...props} />);
  const items = renderedComponent.find(SearchResult);
  expect(items).toHaveLength(1);
});

it('renders_the_movie_image', () => {
  const poster = 'https://m.media-amazon.com/images/M/MV5BZjEyOTE4MzMtNmMzMy00Mzc3LWJlOTQtOGJiNDE0ZmJiOTU4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg';
  const props = {poster};
  const renderedComponent = shallow(<Poster { ...props } />);
  const renderedPoster = renderedComponent.find('img');
  expect(renderedPoster).toHaveLength(1);

});

it('renders the search result data correctly', () => {
  const isLoading = false;
  const searchResult = [{"Title":"Columbo","Year":"1971–2003","imdbID":"tt1466074","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BODBlYjcwNWMtZDM0OS00YzZjLTllOWYtYjg2MDM0NjQ5NjRmXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg"}];
  const props = {isLoading, searchResult};
  const renderedComponent = shallow(<SearchResult {...props} />);
  const h3 = renderedComponent.find('.articleTitle');
  expect(h3.text()).toBe('Columbo');
});

it('spinner works correctly', () => {
  const isLoading = true;
  const props = {isLoading};
  const renderedComponent = shallow(<Spinner {...props} />);
  const spinner = renderedComponent.find('.spinner');
  expect(spinner).toHaveLength(1);

  const isLoading2 = false;
  const props2 = { isLoading2 };
  const renderedComponent2 = shallow(<Spinner {...props2 } />);
  const spinner2 = renderedComponent2.find('.spinner');
  expect(spinner2).toHaveLength(0);

});
