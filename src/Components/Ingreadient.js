import React from "react";

export default function Ingreadient({name, amount}){
    return(
        <>
            <span className="ingreadient-label">{name}</span>
            <span className="ingreadient-value">{amount}</span>
        </>  
    )
}