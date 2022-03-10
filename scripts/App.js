import Filter from "./utils/Filter.js";

class App {
    constructor() {
        this.recipes = recipes;
        this.filter = new Filter()
    }

    async init() {
        new RecipesList(this.recipes).createRecipesList()
        new SearchData(this.recipes, this.filter).searchData()
        this.filter.updateAllLists(this.recipes)
    }
}

const init = new App()
init.init()
