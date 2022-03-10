export default class Filter {
    constructor() {
        this.listIngredients = []
        this.listUstensils = []
        this.listAppliance = []
        this.listFilter = ['Ingredients', 'Ustensils', 'Appliance']
        this.bindEvent()
    }

    updateList(recipes, list) {
        let result = [];
        switch (list) {
            case "Ingredients" :
                recipes.forEach(recipe => {
                    result = result.concat(recipe.ingredients.map(ingredient => ingredient.ingredient.charAt(0).toUpperCase() + ingredient.ingredient.slice(1).toLowerCase()))
                })
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
            listDOM += `<li>${element}</li>`
        })
        document.querySelector(`.filter__${list.toLowerCase()} .filter-list`).innerHTML = listDOM

    }

    updateAllLists(recipe) {
        this.listFilter.forEach(list => {
            this.updateList(recipe, list);
            this.showList(list);
        })
    }

    bindEvent(){
        this.listFilter.forEach(list => {
            document.querySelector(`.filter__${list.toLowerCase()} input`).addEventListener('focus', evt => {
                evt.currentTarget.closest('.filter').classList.add('filter__open')
            })
            document.querySelector(`.filter__${list.toLowerCase()} input`).addEventListener('blur', evt => {
                evt.currentTarget.closest('.filter').classList.remove('filter__open')
            })
        })

    }

}