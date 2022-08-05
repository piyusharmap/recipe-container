import React from "react";
import Recipe from "./Recipe";
import SampleRecipes from "../SampleRecipes";

export default function RecipeList(){
    return(
        <>
            <div className="recipe-list">
                <div className="add-btn-container">
                    <button className="btn btn--primary btn-add">Add Recipe</button>
                </div>
                {SampleRecipes.map(recipe => {
                return <Recipe key={recipe.id} {...recipe}/>
                })}
            </div>
        </>
    )
}