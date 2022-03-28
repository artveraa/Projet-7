export default class Filter {
    constructor() {
        this.listFilter = ['Ingredients', 'Ustensils', 'Appliance']
        this.bindEvent()

    }

    updateList(recipes, list, tagsArray) {
        let result = [];
        switch (list) {
            case "Ingredients" :
                recipes.forEach(recipe => {
                    result = result.concat(recipe.ingredients.map(ingredient => ingredient.ingredient.charAt(0).toUpperCase() + ingredient.ingredient.slice(1).toLowerCase()))
                })
                result = result.filter(ingredient => !tagsArray.map(tag => tag.value).includes(ingredient))
                break;
            case "Ustensils" :
                recipes.forEach(recipe => {
                    result = result.concat(recipe.ustensils.map(ustensil => ustensil.charAt(0).toUpperCase() + ustensil.slice(1).toLowerCase()))
                })
                break;
            case "Appliance" :
                recipes.forEach(recipe => {
                    result.push(recipe.appliance.charAt(0).toUpperCase() + recipe.appliance.slice(1).toLowerCase())
                })
                break;
        }

        this["list" + list] = [...new Set(result)];

    }

    showList(list) {
        let listDOM = ""
        this["list" + list].forEach(element => {
            listDOM += `<li class="filter-elem" data-type="${list}">${element}</li>`
        })
        document.querySelector(`.filter__${list.toLowerCase()} .filter-list`).innerHTML = listDOM

    }

    updateAllLists(recipe, tagsArray) {
        this.listFilter.forEach(list => {
            this.updateList(recipe, list, tagsArray.filter(tag => tag.type == list));
            this.showList(list);
        })
    }

    bindEvent(){
        this.listFilter.forEach(list => {
            document.querySelector(`.filter__${list.toLowerCase()} input`).addEventListener('focus', evt => {
                evt.currentTarget.closest('.filter').classList.add('filter__open')

            })
            /*document.querySelector(`.filter__${list.toLowerCase()} input`).addEventListener('blur', evt => {
                evt.currentTarget.closest('.filter').classList.remove('filter__open')
            })*/
        })

    }

}