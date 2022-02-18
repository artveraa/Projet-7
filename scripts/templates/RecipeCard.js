class RecipeCard {
    constructor(recipe) {
        this.name = recipe.name
        this.time = recipe.time
        this.ingredients = recipe.ingredients
        this.description = recipe.description
    }

    createRecipeCard() {

        const recipeCard = `
        <article class="recipe-card">
                <div class="header"></div>
                <div class="main">
                    <div class="title-time" >
                        <div class="title">${this.name}</div>
                        <div class="time">${this.time}min</div>
                    </div>
                    <div class="ingredients-steps">
                        <ul class="ingredients">
                            ${this.ingredients.map(ingredient => this.createIngredient(ingredient)).join("")}
                        </ul>

                        <div class="steps">
                            ${this.description}
                        </div>
                    </div>
                </div>
            </article>
        `

        return recipeCard
    }

    createIngredient(ingredient) {
        let ingredientDom = `<li><span>${ingredient.ingredient}</span> `
        if (ingredient.quantity) {
            ingredientDom += ingredient.quantity + ' '
        }

        if (ingredient.unit) {
            ingredientDom += ingredient.unit
        }

        ingredientDom += `</li>`
        return ingredientDom

    }
}