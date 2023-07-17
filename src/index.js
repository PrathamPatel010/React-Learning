import React from "react";
import ReactDOM  from "react-dom";


// JSX rules:
// return single element
// div/section/image/article or Fragment
// use camelCase for html attributes
// className instead of class
// close every element
// formatting

function Greetings(){
    return (
        <div className="text-center my-5">
        <h1>Hello People!</h1>
        <h2>I am learning react from freecodecamp</h2>
        </div>
    )
}


// NOTE:This is for reference purpose, but we won't be using it.
// const Greeting = () => {
//     return React.createElement('h1',{},'Hello!');
// }

ReactDOM.render(<Greetings/>,document.getElementById('root'))

