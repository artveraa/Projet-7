class SearchData {
    constructor(recipes, filter) {
        this.searchBar = document.querySelector('.searchbar')
        this.recipes = recipes
        this.filter = filter

    }


    searchData() {

        this.searchBar.addEventListener('input', e => {

            let value = e.target.value.toLowerCase()
            if (value.length >= 3) {
                const filteredArray = this.recipes.filter(recipe => recipe.name.toLowerCase().includes(value) ||
                                                                    recipe.description.toLowerCase().includes(value) ||
                                                                    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(value)))
                new RecipesList(filteredArray).createRecipesList()
                this.filter.updateAllLists(filteredArray)
            } else {
                new RecipesList(this.recipes).createRecipesList()
                this.filter.updateAllLists(this.recipes)
            }
        })
    }


}