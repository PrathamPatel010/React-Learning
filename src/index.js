import ReactDOM  from "react-dom";


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

function GameList(){
    return (
        <div className="container">
        <section className="text-center">This will be a game list</section>
        <div className="row">
          <div className="col-md-4 my-4">
            <Game />
          </div>
          <div className="col-md-4 my-4">
            <Game />
          </div>
          <div className="col-md-4 my-4">
            <Game />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 my-4">
            <Game />
          </div>
          <div className="col-md-4 my-4">
            <Game />
          </div>
          <div className="col-md-4 my-4">
            <Game />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 my-4">
            <Game />
          </div>
          <div className="col-md-4 my-4">
            <Game />
          </div>
          <div className="col-md-4 my-4">
            <Game />
          </div>
        </div>
      </div>
    );
}
const Game = () => {
    return (
        <article>
        <Image/>
        <Title/>
        <Developer/>
        </article>
    )
}
const Image = () => <img src="https://m.media-amazon.com/images/I/512jQQf0loL._SY500_.jpg" width="200rem" height="200rem" alt="game-image" /> 
const Title = () => <h6>Marvel's Spider Man-Remastered (Steam PC Code - Email Delivery)</h6>
const Developer = () => <small>By PlayStation PC</small>

ReactDOM.render(<GameList/>,document.getElementById('root'))