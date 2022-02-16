class App {
    constructor() {
        this.main = document.querySelector('main')
        this.recipeApi = new RecipesApi('../data/recipes.json')
    }

    async all() {
        const recipes = await this.recipeApi.getRecipes()
        const recipesArray = []
        recipesArray.push(recipes)

        console.log(recipesArray)

        recipesArray
            .forEach(recipe => {
            const Template = new RecipeCard(recipe)
            this.main.appendChild(Template.createRecipeCard())
        })
    }
}

const app = new App()
app.all()
