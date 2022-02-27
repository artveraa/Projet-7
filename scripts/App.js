class App {
    constructor() {
        this.recipes = recipes;
    }

    async init() {
        new RecipesList(this.recipes).createRecipesList()

        new FilterData(this.recipes).filterData()
    }
}

const init = new App()
init.init()
