class SearchData {
    constructor(recipes) {
        this.searchBar = document.querySelector('.searchbar')
        this.recipes = recipes
        this.ingredients = this.getIngredients()
    }


    searchData() {

        this.searchBar.addEventListener('input', e => {

            let value = e.target.value.toLowerCase()
            if (value.length >= 3) {
                const filteredArray = this.recipes.filter(recipe => recipe.name.toLowerCase().includes(value) || recipe.description.toLowerCase().includes(value))
                new RecipesList(filteredArray).createRecipesList()
            } else {
                new RecipesList(this.recipes).createRecipesList()
            }
        })
    }

    getIngredients(){
        const allIngredients = []
        this.recipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                allIngredients.push(ingredient.ingredient)

            })
        })

        allIngredients.sort()
        const sortIngredients = new Set(allIngredients)
        return sortIngredients
    }



}