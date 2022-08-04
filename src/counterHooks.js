import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({initialCount}){
    const [count, setCount] = useState(initialCount)
    const style = useContext(ThemeContext)
    function decreaseCount(){
        setCount(
            prevCount => prevCount-1
        )
    }

    function increaseCount(){
        setCount(
            prevCount => prevCount+1
        )
    }

    return(
        <div>
        <button style={style} onClick = {decreaseCount}>-</button>
        <span>{count}</span>
        <button style={style} onClick = {increaseCount    }>+</button>
        </div>
    )
}