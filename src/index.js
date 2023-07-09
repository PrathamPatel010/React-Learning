import React from 'react';
import ReactDOM from 'react-dom/client';
import {NestCompo,Second} from './NestCompo';
import Testing from './Testing';

function Greeting(){
    return(
        // short-hand for wrapping adjacent elements
        <>
        <div className="most-outer-div text-center mt-5">
            <h3>Hello People<br />
                <a href="/">Click me</a>    
            </h3>
        </div>
        <div className="text-center">
            <h3>New Component</h3>
        </div>
        <Testing/>
        <NestCompo/>
        <Second/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting/>)
export default Greeting;