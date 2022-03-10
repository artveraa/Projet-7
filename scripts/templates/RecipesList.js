class RecipesList{
    constructor(recipes) {
        this.recipes = recipes
    }


    createRecipesList(){

        let recipeCardsDom = ""
        this.recipes.forEach(recipe => {
            const Template = new RecipeCard(recipe)
            recipeCardsDom += Template.createRecipeCard()
        })

        document.querySelector('.recipes-grid').innerHTML = recipeCardsDom
    }
}