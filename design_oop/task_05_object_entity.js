// export default
class Url{
    constructor(url) {
        this.url = new URL(url);
        this.location = url;
    }

    getScheme() {
        return this.url.protocol.split(':')[0];
    }
    getHostName() {
        return this.url.host.split(':')[0];
    }
    getQueryParams() {
        let params = (new URL(this.location)).searchParams;
        const result = {}
        for (const [key, value] of params.entries()) {
            result[key] = value;
        }
        return result;
    }
    getQueryParam(key, reserv = null) {
        const query = this.getQueryParams();
        return (Object.hasOwn(query, key)) ? query[key] : reserv;
    }
    equals(newUrl) {
        return (this.location === newUrl.location);
    }

}
const yandexUrl = 'http://yandex.ru?key=value&key2=value2';
const googleUrl = 'https://google.com:80?a=b&c=d&lala=value';
const url = new Url(googleUrl);
console.log(
    url.getScheme(), // 'http'
    url.getHostName(),
    url.getQueryParams(),
    url.getQueryParam('key'),
    url.getQueryParam('key2', 'lala'),
    url.getQueryParam('new', 'ehu'),
    url.getQueryParam('new'),
    url.equals(new Url('http://yandex.ru:80?key=value&key2=value2')), // true
url.equals(new Url('http://yandex.ru:80?key=value')), // false
);


// BEGIN
// export default class Url {
//     constructor(url) {
//         this.url = new URL(url);
//         this.url.scheme = this.url.protocol.slice(0, -1);
//         this.url.queryParams = Object.fromEntries(this.url.searchParams);
//     }
//
//     getScheme() {
//         return this.url.scheme;
//     }
//
//     getHostName() {
//         return this.url.hostname;
//     }
//
//     getQueryParams() {
//         return this.url.queryParams;
//     }
//
//     getQueryParam(key, defaultValue = null) {
//         return this.url.searchParams.get(key) ?? defaultValue;
//     }
//
//     toString() {
//         return this.url.toString();
//     }
//
//     equals(url) {
//         return (this.toString() === url.toString());
//     }
// }
// END
