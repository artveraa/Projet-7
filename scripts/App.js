class App {
    constructor() {
        this.recipes = recipes;
    }

    async init() {
        new RecipesList(this.recipes).createRecipesList()
        new SearchData(this.recipes).searchData()
        new FilterData(this.recipes).filterData()

        console.log(new SearchData(this.recipes).getIngredients())

    }
}

const init = new App()
init.init()
