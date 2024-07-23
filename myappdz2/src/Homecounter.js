import React, { useState } from "react";
import "./Homecounter.css";

const Homecounter=()=>{

    const [counter,setCounter] =useState(0);
     
    const increaseSetCounter =()=>{ 
        setCounter(counter+1);
    };

    const decreaseSetCounter =()=>{ 
        setCounter(counter-1);
    }


    return(
        <div className="counter">
            <h1>Counter</h1>

            <button onClick={increaseSetCounter}> Увеличение</button>
            <button onClick={decreaseSetCounter}> уменьшение</button>
    
    <p>counter -{counter}</p>
            </div>
    );
};


export default Homecounter;
