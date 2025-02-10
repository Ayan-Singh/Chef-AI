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
            <ul>
                {ingredientListItems}
            </ul>
            
        </main>
    )
}

export default Main