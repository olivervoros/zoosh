import axios from "axios";
import {slugify} from "./Helper";

export const IMDB_API_ENDPOINT = 'https://www.omdbapi.com/?apikey=49f56b25&s=';
export const WIKIPEDIA_OPENSEARCH_API_ENDPOINT = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&prop=extracts&exintro=1&namespace=0&search=';
export const WIKIPEDIA_GET_RELATED_ARTICLES_ENDPOINT = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=';
export const WIKIPEDIA_GET_LEAD_ARTICLE_ENDPOINT = 'https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&explaintext=1&exintro=1&titles=';

export async function callImdbApi(movieTitle) {
    try {
        let result = await axios.get(IMDB_API_ENDPOINT + slugify(movieTitle));
        console.log(result);
        return result;

    } catch (error) {
        console.log(error);
    }
}

export async function callWikipediaApi(searchTitle, imdbID) {
    try {
        let result = await axios.get(WIKIPEDIA_OPENSEARCH_API_ENDPOINT + searchTitle);
        let leadArticleResult = await axios.get(WIKIPEDIA_GET_LEAD_ARTICLE_ENDPOINT + searchTitle);
        let relatedArticles = await axios.get(WIKIPEDIA_GET_RELATED_ARTICLES_ENDPOINT + searchTitle);
        result.data.leadArticle = leadArticleResult.data;
        result.data.imdbID = imdbID;
        result.data.relatedArticles = relatedArticles.data;
        return result;

    } catch (error) {
        console.log(error);
    }
}

