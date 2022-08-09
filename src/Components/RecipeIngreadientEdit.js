import React from "react";

export default function RecipeIngreadientEdit(props){
    const {ingreadient, handleIngreadientChange, handleIngreadientDelete} = props

    function handleChange(changes){
        handleIngreadientChange(ingreadient.id, {...ingreadient, ...changes})
    }

    return(
        <>
            <input className ="recipe-edit__input" type="text" placeholder="Name of ingreadient" value={ingreadient.name} onInput={e => handleChange({name: e.target.value})}/>
            <input className ="recipe-edit__input" type="text" placeholder="Amount of ingreadient" value={ingreadient.amount} onInput={e => handleChange({amount: e.target.value})}/>
            <button onClick={() => handleIngreadientDelete(ingreadient.id)} className="btn btn-danger">&times;</button>
        </>
    )
}