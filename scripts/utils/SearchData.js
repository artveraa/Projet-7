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
                this.selectFiltersTags(this.filter)

            } else {
                new RecipesList(this.recipes).createRecipesList()
                this.filter.updateAllLists(this.recipes)

            }
        })
    }

    selectFiltersTags(filter) {
        let updatedFilters = document.querySelectorAll('.filter-list .filter-elem')


        updatedFilters.forEach(el => {
            el.addEventListener('click', e => {
                this.buildTag(el.innerHTML);

                if(this.deleteTag()){
                    el.classList.remove('delete');
                } else {
                    el.classList.add('delete');
                }
            })
        })
    }

    buildTag(selectedFilter) {
        this.tagsContainer = document.querySelector('.tags')
        const tag = `
             <li class="tag">
                <p class="tag__name">${selectedFilter}</p>
                <div class="tag__close-icon"></div>
             </li>
        `
        this.tagsContainer.innerHTML += tag
    }

    deleteTag(){
        const tag = document.querySelectorAll('.tag')
        tag.forEach(el => {
            el.querySelector('.tag__close-icon').addEventListener('click', () => {
                    el.style.display = 'none'

                })
        })
    }


}