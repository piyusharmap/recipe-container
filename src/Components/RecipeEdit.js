import React,{useContext} from "react";
import RecipeIngreadientEdit from "./RecipeIngreadientEdit";
import { v4 as uuidv4 } from "uuid";
import { RecipeContext } from "./App";

export default function RecipeEdit({recipe}){
    const {handleRecipeChange, handleRecipeSelect} = useContext(RecipeContext)

    function handleChange(changes){
        handleRecipeChange(recipe.id, {...recipe, ...changes})
    }

    function handleIngreadientChange(id, ingreadient){
        const newIngreadients = [...recipe.ingreadients]
        const index = newIngreadients.findIndex(i => i.id === id)
        newIngreadients[index] = ingreadient
        handleChange({ingreadients: newIngreadients})
    }

    function handleIngreadientAdd(){
        const newIngreadient = {
            id: uuidv4(),
            name: "",
            amount: ""
        }
        handleChange({ingreadients: [...recipe.ingreadients, newIngreadient]})
    }

    function handleIngreadientDelete(id){
        handleChange({ingreadients: recipe.ingreadients.filter(i => i.id !== id)})
    }

    return(
        <div className="recipe-edit">
            <div className="recipe-edit__remove-btn-container">
                <button onClick={() => handleRecipeSelect(undefined)} className="btn btn-recipe-edit">&times;</button>
            </div>
            <div className="recipe-edit-details-grid">
                <label className="recipe-edit__label" htmlFor="name">Name</label>
                <input className="recipe-edit__input" type="text" name="name" id="name" placeholder="Name of the recipe" value={recipe.name} onChange={e => handleChange({name: e.target.value})}/>

                <label className="recipe-edit__label" htmlFor="cookTime">Cook Time</label>
                <input className="recipe-edit__input" type="text" name="cookTime" id="cookTime" placeholder="Time required to cook the recipe" value={recipe.cookTime} onChange={e => handleChange({cookTime: e.target.value})}/>

                <label className="recipe-edit__label" htmlFor="serving">Servings</label>
                <input className="recipe-edit__input" type="number" min="1" name="serving" id="serving" placeholder="Number of servings" value={recipe.servings} onChange={e => handleChange({servings: parseInt(e.target.value) || '    '})}/>

                <label className="recipe-edit__label" htmlFor="instruction">Instructions</label>
                <textarea className="recipe-edit__input" name="instruction" id="instruction" placeholder="Instructions for preparing this recipe" value={recipe.instructions} onChange={e => handleChange({instructions: e.target.value})}/>
            </div>
            <br />
            <label className="recipe-edit__label">Ingreadients</label>
            <div className="recipe-edit__ingreadient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingreadients.map(ingreadient => {
                    return <RecipeIngreadientEdit handleIngreadientChange={handleIngreadientChange}
                    handleIngreadientDelete={handleIngreadientDelete} key={ingreadient.id} ingreadient={ingreadient}/>
                })}
            </div>
            <div className="recipe-edit__add-btn">
                <button onClick={() => handleIngreadientAdd()} className="btn btn--primary btn-add">Add Ingreadient</button>
            </div>
        </div>
    )
}