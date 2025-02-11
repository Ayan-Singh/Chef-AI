import { useState } from "react"
function Main(){

const [ingredients,setIngredients] =useState([]);

const ingredientListItems=ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
))
function handleSubmit(event){
    event.preventDefault()
    const formData =new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients ,newIngredient])
}

    return(
        <main>
            <form onSubmit={handleSubmit} className="add-form">
                <input 
                type="text"
                placeholder="e.g. oregano"
                aria-label="Add ingredient" 
                name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            { ingredients.length > 0 && <section>
                <h2>Ingredients on hand : </h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientListItems}</ul>
                {ingredients.length >3 && <div className="get-recipe">
                    <div>
                        <h3>Ready for a recipe</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>}
            
        </main>
    )
}

export default Main