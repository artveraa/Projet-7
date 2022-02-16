class RecipeCard {
    constructor(recipe) {
        this.recipe = recipe
    }

    createRecipeCard() {
        const cardsGrid = document.querySelector('.recipes-grid')
        const recipeCard = `
        <article class="recipe-card">
                <div class="header"></div>
                <div class="main">
                    <div class="title-time" >
                        <div class="title">${this.recipe.name}</div>
                        <div class="time">${this.recipe.time}</div>
                    </div>
                    <div class="ingredients-steps">
                        <ul class="ingredients">
                            <li><span>Lait de coco: </span>400 ml</li>
                            <li><span>Jus de citron: </span>2</li>
                            <li><span>Créme de coco: </span>4 cuillères</li>
                            <li><span>Sucre: </span>20g</li>
                            <li><span>Glaçons: </span>2</li>
                        </ul>

                        <div class="steps">
                            Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée
                        </div>
                    </div>
                </div>
            </article>
        `

        cardsGrid.innerHTML = recipeCard
        return cardsGrid
    }
}