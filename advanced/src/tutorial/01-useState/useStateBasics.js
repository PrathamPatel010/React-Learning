import React from "react";
import { useState } from "react";

const UseStateBasics = () => {
    // console.log(useState);
    const [text,setText] = useState('Random title');
    const handleClick = () => {
        if(text==='Random title'){
            setText('Hello world');
        } else{
            setText('Random title');
        }
    }
    return(
        <React.Fragment>
            <h2 className="text-center my-3">{text}</h2>
            <div className="container text-center">
            <button className="btn btn-secondary" onClick={handleClick}>Change Text</button>
            </div>
        </React.Fragment>
    )
}

export default UseStateBasics;