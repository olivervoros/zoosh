export const IMDB_API_ENDPOINT = 'https://www.omdbapi.com/?apikey=49f56b25&s=';
export const WIKIPEDIA_OPENSEARCH_API_ENDPOINT = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&prop=extracts&exintro=1&namespace=0&search=';
export const WIKIPEDIA_GET_RELATED_ARTICLES_ENDPOINT = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=';
export const WIKIPEDIA_GET_LEAD_ARTICLE_ENDPOINT = 'https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&explaintext=1&exintro=1&titles=';
export const CHECK_IF_IMAGE_EXISTS = true;
export const WIKIPEDIA_WEBSITE_URL = 'https://www.wikipedia.org/wiki/';
export const IMDB_WEBSITE_URL = 'https://www.imdb.com/title/'

export function imageExists(image_url){

    if(image_url==='N/A') {return false}

    let http = new XMLHttpRequest();

    http.open('HEAD', image_url, true);
    http.send();

    return http.status !== 404;

}

function lowerCase(str) {
    return str.toLowerCase();
}

/**
 * "Safer" String.toUpperCase()
 */
function upperCase(str) {
    return str.toUpperCase();
}

export function properCase(str) {
    return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
}

export function escapeHtml(str) {
    str = str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&#39;")
        .replace(/"/g, "&quot;");

    return str;
}

/**
 * Remove non-word chars.
 */
function removeNonWord(str) {
    return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, "");
}

/**
 * Replaces all accented chars with regular ones
 */
function replaceAccents(str) {
    // verifies if the String has accents and replace them
    if (str.search(/[\xC0-\xFF]/g) > -1) {
        str = str
            .replace(/[\xC0-\xC5]/g, "A")
            .replace(/[\xC6]/g, "AE")
            .replace(/[\xC7]/g, "C")
            .replace(/[\xC8-\xCB]/g, "E")
            .replace(/[\xCC-\xCF]/g, "I")
            .replace(/[\xD0]/g, "D")
            .replace(/[\xD1]/g, "N")
            .replace(/[\xD2-\xD6\xD8]/g, "O")
            .replace(/[\xD9-\xDC]/g, "U")
            .replace(/[\xDD]/g, "Y")
            .replace(/[\xDE]/g, "P")
            .replace(/[\xE0-\xE5]/g, "a")
            .replace(/[\xE6]/g, "ae")
            .replace(/[\xE7]/g, "c")
            .replace(/[\xE8-\xEB]/g, "e")
            .replace(/[\xEC-\xEF]/g, "i")
            .replace(/[\xF1]/g, "n")
            .replace(/[\xF2-\xF6\xF8]/g, "o")
            .replace(/[\xF9-\xFC]/g, "u")
            .replace(/[\xFE]/g, "p")
            .replace(/[\xFD\xFF]/g, "y");
    }

    return str;
}

const WHITE_SPACES = [
    " ",
    "\n",
    "\r",
    "\t",
    "\f",
    "\v",
    "\u00A0",
    "\u1680",
    "\u180E",
    "\u2000",
    "\u2001",
    "\u2002",
    "\u2003",
    "\u2004",
    "\u2005",
    "\u2006",
    "\u2007",
    "\u2008",
    "\u2009",
    "\u200A",
    "\u2028",
    "\u2029",
    "\u202F",
    "\u205F",
    "\u3000"
];

/**
 * Remove chars from beginning of string.
 */
function ltrim(str, chars) {
    chars = chars || WHITE_SPACES;

    var start = 0,
        len = str.length,
        charLen = chars.length,
        found = true,
        i,
        c;

    while (found && start < len) {
        found = false;
        i = -1;
        c = str.charAt(start);

        while (++i < charLen) {
            if (c === chars[i]) {
                found = true;
                start++;
                break;
            }
        }
    }

    return start >= len ? "" : str.substr(start, len);
}

/**
 * Remove chars from end of string.
 */
function rtrim(str, chars) {
    chars = chars || WHITE_SPACES;

    let end = str.length - 1,
        charLen = chars.length,
        found = true,
        i,
        c;

    while (found && end >= 0) {
        found = false;
        i = -1;
        c = str.charAt(end);

        while (++i < charLen) {
            if (c === chars[i]) {
                found = true;
                end--;
                break;
            }
        }
    }

    return end >= 0 ? str.substring(0, end + 1) : "";
}

/**
 * Remove white-spaces from beginning and end of string.
 */
function trim(str, chars) {
    chars = chars || WHITE_SPACES;
    return ltrim(rtrim(str, chars), chars);
}

export function slugify(str, delimeter) {
    if (delimeter == null) {
        delimeter = "-";
    }

    str = replaceAccents(str);
    str = removeNonWord(str);
    str = trim(str) //should come after removeNonWord
        .replace(/ +/g, delimeter) //replace spaces with delimeter
        //.toLowerCase();

    return str;
}



