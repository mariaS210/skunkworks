const BASE_URL = "https://hacker-news.firebaseio.com";

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

    static getNewsItems(callback) {
        let request = new Request(`${BASE_URL}/v0/topstories.json`);
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

    static getBulkNewsItems(items, callback) {
        let requests = []
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

export default ApiEndpoints;