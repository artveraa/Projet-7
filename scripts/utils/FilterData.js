class FilterData {
    constructor(recipes) {
        this.recipes = recipes
    }

    filterData(){
        this.recipes.forEach(recipe => {
            const fullIngredients = recipe.ingredients
            fullIngredients.forEach(ingredient => {
                ingredient.ingredient
            })
        })
    }
}