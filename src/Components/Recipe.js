import React,{useContext} from "react";
import IngreadientsList from "./IngreadientsList";
import { RecipeContext } from "./App";

export default function Recipe(props){
    const {handleDeleteRecipe, handleSelectRecipe} = useContext(RecipeContext)
    const { id, name, cookTime, servings, instructions, ingreadients } = props

    return(
        <div className="recipe">
            <div className="recipe-header">
                <h3 className="recipe-title">{name}</h3>
                <div>
                    <button onClick={() => handleSelectRecipe(id)} className="btn btn--primary mr-1">Edit</button>
                    <button onClick={()=>handleDeleteRecipe(id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
            <div className="recipe-row">
                <span className="recipe-label">Cook Time(hrs): </span>
                <span className="recipe-value">{cookTime}</span>
            </div>
            <div className="recipe-row">
                <span className="recipe-label">Servings: </span>
                <span className="recipe-value">{servings}</span>
            </div>
            <div className="recipe-row">
                <span className="recipe-label">Instructions: </span>
                <div className="recipe-value value-indented value-instructions">
                    {instructions}
                </div>
            </div>
            <div className="recipe-row">
                <span className="recipe-label">Ingreadients: </span>
                <div className="recipe-value value-indented ">
                    <IngreadientsList ingreadients={ingreadients}/>
                </div>
            </div>
        </div>
    )
}