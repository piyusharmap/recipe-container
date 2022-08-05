import React from "react";
import Ingreadient from "./Ingreadient";

export default function IngreadientsList({ingreadients}){
    const ingreadientElements = ingreadients.map(ingreadient => {
        return <Ingreadient key = {ingreadient.id} {...ingreadient}/>
    })

    return(
        <div className="ingreadient-grid">
            {ingreadientElements}
        </div>
    )
}