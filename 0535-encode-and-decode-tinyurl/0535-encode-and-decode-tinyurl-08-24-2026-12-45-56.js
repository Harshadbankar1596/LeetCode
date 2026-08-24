/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

function MyList() {
    this.list = new Map();
}

MyList.prototype.GetUrl = function (code) {
    return this.list.get(code);
};

MyList.prototype.AddUrl = function (url , code){
    this.list.set(code , url)
}

const myList = new MyList();

var encode = function (longUrl) {
    let code;
    do {
        code = Math.floor(Math.random() * 1000000).toString();
    } while (myList.list.has(code));
    myList.AddUrl(longUrl  , code)
    return code
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    return myList.GetUrl(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */