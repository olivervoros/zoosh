The task:

Write a solely front-end (react/angular/vue) JavaScript application, which helps to search for movies.

Requirements:

- Easy to read, modular, clean code (not a single file), and the generated HTML is structured
- You can use popular JS libraries (angular, react, ramda, moment, jquery, stb)
- Design is not very important, and should be only minimal (layout, margin/paddings, titles highlighted, stb)

Functionality:

The UI should have an input field to search movies.       
By adding the search term and pressing the button or hitting enter the software loads the search results from IMDB using a REST request.

The results should be displayed with some associated data/image, and the titles should be clickable. 
By clicking on the title, the software attempts to load the related Wikipedia page by making a REST request to the Wikipedia API.
The results should contain one link to the IMDB site, and one to the Wikipedia site.
By clicking on the result title, the wikipedia article loads.
There should also be another button on the page, to load the related Wikipedia links.

Levels:

1, The web app is working correctly         
2, The CSS is defined by sass or less             
3, There is a progress indicator/Spinner when the APIs are queried        
4, There are tests written        
5, The Material-UI library is being used to define the UI          

The solution:     

Hello Zoosh Dev Team!      

First of all thank you very much for the opportunity to complete the test.      

The Code:     
The task is ready and can be downloaded from my github account:     
https://github.com/olivervoros/zoosh     
I used ReactJS to complete the task, so after you cloned the git project please run npm install.     
I tried to finish all levels, I used Sass, I added the loading spinner, and I have also written some tests. (you can run them by issuing "npm tests")           
The only thing should be missing is the Material UI.      

The live site:     
Also, I have deployed the ready project to my dev server, which you can access from here:     
https://www.zoosh.sancusprojects.com (username: testuser password: will be provided by Szilvia or Laura)

Few testing examples:
- Searching for the term "Columbo" and clicking on the first result will give you a full working example
- Searching for "Star Wars" and clicking on the first result will give you an example when there is no wikipedia article
- Searching for "nincsfilm" should display a message, that there is no movie found