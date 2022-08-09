import React, {useContext} from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./App";

export default function RecipeList({recipes}){
    const {handleAddRecipe} = useContext(RecipeContext)
    return(
        <>
            <div className="recipe-list">
                {recipes.map(recipe => {
                return <Recipe key={recipe.id} {...recipe}/>
                })}
                <div className="add-btn-container">
                    <button className="btn btn--primary btn-add" onClick={handleAddRecipe}>Add Recipe</button>
                </div>
            </div>
        </>
    )
}