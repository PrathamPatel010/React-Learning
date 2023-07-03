import React from 'react';
import ReactDOM from 'react-dom/client';

function Greetings(){
    return (
        <h1>My First Component</h1>
    )
}

function Greeting(){
    return(
        <div>
            <h3>Hello People
                <ul>
                    <li>
                        <a href="#">Click me</a>
                    </li>
                </ul>
            </h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greetings/>)
root.render(<Greeting/>)
export default Greetings;