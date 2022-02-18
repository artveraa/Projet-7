class Search {
    constructor(recipes) {
        this.searchBar = document.querySelector('.searchbar')
        this.recipes = recipes
        this.recipeCard = document.querySelectorAll('.recipe-card')

    }

    getSearchBarValue() {
        this.searchBar.addEventListener('input', e => {
            const value = e.target.value


            this.recipes.filter(recipe => {
                if (recipe.name.includes(value)){
                    console.log(recipe)
                } else {

                }
            })
        })


    }
}