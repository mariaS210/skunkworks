const BASE_URL = "https://hacker-news.firebaseio.com";

class ApiEndpoints {
    static getNewsItem(itemId, callback) {
        let request = new Request(`${BASE_URL}/v0/item/${itemId}.json`);
        fetch(request)
            .then(response => {
                if (response.status === 200) {
                    return response.json();;
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
}

export default ApiEndpoints;