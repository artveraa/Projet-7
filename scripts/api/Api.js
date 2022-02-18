class Api {
    constructor(url) {
        this.url = url
    }

    async get() {
        return fetch(this.url)
            .then(res => res.json)
            .catch(err => console.log('Erreur', err))
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