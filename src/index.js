import ReactDOM  from "react-dom";
import GameList from "./JSFocusedgamelist";
// import GameList1 from "./CSSFocusedgamelist";

// CSS 
import './index.css'

// JSX rules:
// return single element
// div/section/image/article or Fragment
// use camelCase for html attributes
// className instead of class
// close every element
// formatting

// function Greetings(){
//     return (
//         <div className="text-center my-5">
//         {/* <h1>Hello People!</h1> */}
//         {/* <h2>I am learning react from freecodecamp</h2> */}
//             <Person/>
//             <Message/>
//         </div>
//     )
// }

// const Person = () => <h2>I am Pratham</h2>
// const Message = () => <h2>I am learning react from freecodecamp</h2>

// NOTE:This is for reference purpose, but we won't be using it.
// const Greeting = () => {
//     return React.createElement('h1',{},'Hello!');
// }

ReactDOM.render(<GameList/>,document.getElementById('root'))