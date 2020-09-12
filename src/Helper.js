export const IMDB_API_ENDPOINT = 'http://www.omdbapi.com/?apikey=49f56b25&s=';
export const WIKIPEDIA_OPENSEARCH_API_ENDPOINT = 'https://en.wikipedia.org/w/api.php?action=opensearch&prop=extracts&exintronamespace=0&search=';
export const WIKIPEDIA_GET_LEAD_ARTICLE_ENDPOINT = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&exintro=1&titles=';
export const CHECK_IF_IMAGE_EXISTS = true;

export function imageExists(image_url){

    let http = new XMLHttpRequest();

    http.open('HEAD', image_url, true);
    http.send();

    return http.status !== 404;

}

