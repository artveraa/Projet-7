class FilterData {
    constructor(recipes) {
        this.searchBar = document.querySelector('.searchbar')
        this.recipesSection = document.querySelector('.recipes-grid')
        this.recipes = recipes
    }


    filterData() {

        this.searchBar.addEventListener('input', e => {

            let value = e.target.value.toLowerCase()

            if (value.length >= 3) {
                const filteredArray = this.recipes.filter(recipe => recipe.name.toLowerCase().includes(value))
                console.log(filteredArray)
                new RecipesList(filteredArray).createRecipesList()
            } else {
                new RecipesList(this.recipes).createRecipesList()
            }
        })
    }
}