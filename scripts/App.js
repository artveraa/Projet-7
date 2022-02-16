class App {
    constructor() {
        this.main = document.querySelector('main')
        this.recipeApi = new RecipesApi('../data/recipes.json')
    }

    async main() {
        const recipes = await this.recipeApi.getRecipes()

        recipes.forEach(recipe => {
            const Template = new RecipeCard(recipe)
            this.main.appendChild(Template.createRecipeCard())
        })
    }
}

const app = new App()
app.main()
