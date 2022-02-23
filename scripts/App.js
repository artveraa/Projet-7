class App {
    constructor() {
        this.main = document.querySelector('main .container-xxl')
        this.recipes = recipes;
        this.searchBar = document.querySelector('.searchbar')
    }

    async init() {
        let recipeCardsDom = ""
        this.recipes.forEach(recipe => {
            const Template = new RecipeCard(recipe)
            recipeCardsDom += Template.createRecipeCard()

        })


        this.searchBar.addEventListener('keypress', e => {
            const value = e.target.value
            if (e.key === 'Enter' && value.length >= 3) {

                this.recipes.filter(recipe => {
                    if (!recipe.name.includes(value)) {
                        const Template = new RecipeCard(recipe)
                        recipeCardsDom += Template.createRecipeCard()
                        console.log(recipeCardsDom)
                    } else {

                    }
                })

            }
        })

        document.querySelector('.recipes-grid').innerHTML = recipeCardsDom

    }
}

const init = new App()
init.init()
