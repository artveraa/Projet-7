class SearchData {
    constructor(recipes, filter) {
        this.searchBar = document.querySelector('.searchbar')
        this.recipes = recipes
        this.filter = filter
        this.tagsArray = []
    }


    searchData(value) {

        value = value.toLowerCase()
        this.result = []


        for(let recipe of this.recipes) {
            if(recipe.name.toLowerCase().includes(value) || recipe.description.toLowerCase().includes(value) || recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(value))){
                this.result.push(recipe)
            }
        }

        this.recipes = this.result
        return this.recipes


    }

    filterData() {
        this.ultraFilterRecipes = this.filterRecipes.filter(recipe => true)
        this.tagsArray.forEach(tag => {
            switch (tag.type) {
                case 'Ingredients':
                    this.ultraFilterRecipes = this.ultraFilterRecipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase() == tag.value.toLowerCase()))
                    break;
                case 'Ustensils':
                    this.ultraFilterRecipes = this.ultraFilterRecipes.filter(recipe => recipe.ustensils.some(ustensil => ustensil.toLowerCase() == tag.value.toLowerCase()))
                    break;
                case 'Appliance':
                    this.ultraFilterRecipes = this.ultraFilterRecipes.filter(recipe => recipe.appliance.toLowerCase() == tag.value.toLowerCase())
                    break;
            }
        })
    }

    bindEvent() {
        this.searchBar.addEventListener('input', e => {

            if (e.target.value.length >= 3) {
                this.filterRecipes = this.searchData(e.target.value)
                new RecipesList(this.filterRecipes).createRecipesList()
                this.filter.updateAllLists(this.filterRecipes, this.tagsArray)
                this.selectFiltersTags()
            }
        })
    }

    selectFiltersTags() {
        let updatedFilters = document.querySelectorAll('.filter-list .filter-elem')


        updatedFilters.forEach(el => {
            el.addEventListener('click', () => {
                this.buildTag({
                    type: el.dataset.type,
                    value: el.innerHTML
                });
                this.tagsArray.push({
                    type: el.dataset.type,
                    value: el.innerHTML
                })

                this.filterData()
                this.deleteTag()
                new RecipesList(this.ultraFilterRecipes).createRecipesList()
                this.filter.updateAllLists(this.ultraFilterRecipes, this.tagsArray)
                this.selectFiltersTags()
            })
        })
    }


    buildTag(selectedFilter) {
        this.tagsContainer = document.querySelector('.tags')

        const tag = `
             <li class="tag" data-type="${selectedFilter.type}">
                <p class="tag__name">${selectedFilter.value}</p>
                <div class="tag__close-icon"></div>
             </li>
        `
        this.tagsContainer.innerHTML += tag

    }

    deleteTag() {
        document.querySelectorAll('.tag .tag__close-icon').forEach(btn => {
            btn.addEventListener('click', (e) => {
                let currentTag = e.currentTarget.closest(".tag")
                this.tagsArray = this.tagsArray.filter(tag => tag.type != currentTag.dataset.type || tag.value != currentTag.querySelector('.tag__name').innerHTML)
                this.filterData()
                this.deleteTag()
                new RecipesList(this.ultraFilterRecipes).createRecipesList()
                this.filter.updateAllLists(this.ultraFilterRecipes, this.tagsArray)
                this.selectFiltersTags()
                currentTag.remove()
            })
        })

    }


}