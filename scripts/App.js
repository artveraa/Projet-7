class App {
    constructor() {
        this.main = document.querySelector('main .container-xxl')
        this.recipes = recipes;
    }

    async all() {
        let recipeCardsDom = ""
        this.recipes.forEach(recipe => {
            const Template = new RecipeCard(recipe)
            recipeCardsDom += Template.createRecipeCard()

        })

        document.querySelector('.recipes-grid').innerHTML = recipeCardsDom

        console.log(new Search(this.recipes).getSearchBarValue())
    }
}

const app = new App()
app.all()
