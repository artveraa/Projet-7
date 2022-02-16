class Api {
    constructor(url) {
        this.url = url
    }

    async get() {
        return fetch(this.url)
            .then(res => res.json)
            .then(res => res.data)
    }
}

class RecipesApi extends Api {
    constructor(url) {
        super(url);
    }

    async getRecipes() {
        return await this.get()
    }
}