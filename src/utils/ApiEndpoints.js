const BASE_URL = "https://hacker-news.firebaseio.com";
let cursor = 0;
let limitCounter = 30;
let newsItems = []


class ApiEndpoints {
    static getNewsItem(itemId, callback) {
        let request = new Request(`${BASE_URL}/v0/item/${itemId}.json`);
        fetch(request)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then(response => {
                callback && callback(response);
            }).catch(error => {
                console.error(error);
            });
    }

    static getNewsItems(callback, endpoint="topstories", forceMakeRequest=false) {
        if (newsItems.length > 0 && !forceMakeRequest) {
            cursor = cursor + limitCounter;
            let result = newsItems.slice(0, cursor);
            return callback(result);
        }
        let request = new Request(`${BASE_URL}/v0/${endpoint}.json`);
        fetch(request)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then(response => {
                newsItems = response;
                cursor = cursor + limitCounter;
                let result = response.slice(0, cursor);
                callback && callback(result);
            }).catch(error => {
                console.error(error);
            });
        }

    static getBulkNewsItems(items, callback) {
        let requests = []
        if (items && callback) {
            items.forEach(itemId => {
                requests.push(new Request(`${BASE_URL}/v0/item/${itemId}.json`));
            });
            Promise.all(requests.map(request =>
                fetch(request).then(response => response.json())
            )).then(responses => {
                callback(responses);
            });
        }
    }

    static getBulkNewsItemsPaginated(items, indexStart, indexEnd, results, callback, forceMakeRequest=false) {
        let requests = []
        let part = items.slice(indexStart, indexEnd);
        if (!part) {
            return results
        }
        if (callback) {
            part.forEach(itemId => {
                requests.push(new Request(`${BASE_URL}/v0/item/${itemId}.json`));
            });
            Promise.all(requests.map(request =>
                fetch(request).then(response => response.json())
            )).then(responses => {
                callback(results.concat(responses));
            });
        }
    }
}

export default ApiEndpoints;