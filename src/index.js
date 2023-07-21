import ReactDOM  from "react-dom";

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

// function GameList(){
//     return (
//         <div className="container">
//         <section className="text-center"><h1 className="mb-5">This will be a game list</h1></section>
//         <div className="row">
//             <div className="col-md-4">
//                 <Game/>
//             </div>
//             <div className="col-md-4">
//                 <Game/>
//             </div>
//             <div className="col-md-4">
//                 <Game/>
//             </div>
//             <div className="col-md-4">
//                 <Game/>
//             </div>
//             <div className="col-md-4">
//                 <Game/>
//             </div>
//             <div className="col-md-4">
//                 <Game/>
//             </div>
//             <div className="col-md-4">
//                 <Game/>
//             </div>
//         </div>
//         </div>
//         );
// }

// using CSS and nested components
// const Game = () => {
//     return (
//         <article className="game">
//         {/* <Image/>
//         <Title/>
//         <Developer/> */}
//         <img className="img-fluid my-3" src="https://m.media-amazon.com/images/I/512jQQf0loL._SY500_.jpg" width="200rem" height="200rem" alt="game-image" /> 
//         <h6 style={{fontSize:'0.75rem'}}>Marvel's Spider Man-Remastered (Steam PC Code - Email Delivery)</h6>
//         <small>By PlayStation PC</small>
//         </article>
//     )
// }

// const Image = () => <img className="img-fluid my-3" src="https://m.media-amazon.com/images/I/512jQQf0loL._SY500_.jpg" width="200rem" height="200rem" alt="game-image" /> 
// JSX CSS
// const Title = () => <h6 style={{fontSize:'0.75rem'}}>Marvel's Spider Man-Remastered (Steam PC Code - Email Delivery)</h6>
// const Developer = () => <small>By PlayStation PC</small>


// using JS
// setup variables

function GameList(){
    return (
        <div className="container">
        <section className="text-center"><h1 className="mb-5">This will be a game list</h1></section>
        <div className="row">
            <div className="col-md-4">
                <Game url="https://m.media-amazon.com/images/I/413k8MW+jPL._SY445_SX342_.jpg" name="SM-RM" ratings={`ratings: ${99/10}/10`}>
                    <p>In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York.</p>
                </Game>
            </div>
            <div className="col-md-4">
                <Game url="https://m.media-amazon.com/images/I/811umGHYORL._SX679_.jpg" name="Miles-morale" ratings={`ratings:${80/10}/10`}>
                <p>After the events of Marvel’s Spider-Man Remastered, teenage Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. </p>
                </Game>           
            </div>
            <div className="col-md-4">
                <Game url="https://m.media-amazon.com/images/I/51+j71XPpmL._SX342_SY445_.jpg" name="Marvels Avengers" ratings={`ratings:${85/10}/10`}>
                <p>Assemble your team of Earth’s Mightiest Heroes, embrace your powers, and live your Super Hero dreams.</p>
                </Game>
            </div>
            <div className="col-md-4">
                <Game url="https://m.media-amazon.com/images/I/513QfJgiU9L._SX300_SY300_QL70_FMwebp_.jpg" name="GTA V" ratings={`ratings:${95/10}/10`} >
                <p>Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.</p>
                </Game>
            </div>
            <div className="col-md-4">
                <Game url="https://m.media-amazon.com/images/I/61bP14H0D0L._SX300_SY300_QL70_FMwebp_.jpg" name="GTA SA" ratings={`ratings:${75/10}/10`}>
                <p>Grand Theft Auto: San Andreas is a 2004 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the fifth main entry in the Grand Theft Auto series, following 2002's Grand Theft Auto: Vice City, and the seventh installment overall.</p>
                </Game>
            </div>


        </div>
        </div>
    );
}
// const game1 = {
//     imgURL : "https://m.media-amazon.com/images/I/512jQQf0loL._SY500_.jpg",
//     developer:"By PlayStation PC",
//     title : "Marvel's Spider Man-Remastered (Steam PC Code - Email Delivery)"
// }
const Game = (props) => {
    console.log(props)

    // props destructuring
    const {url, name, ratings, children} = props;
    return (
        <article className="game">
        {/* <img className="my-3 img img-fluid" src={game1.imgURL} alt="game-image" />  */}
        {/* <h6>{game1.title}</h6>
        <small>{game1.developer.toUpperCase()}</small> */}
        <img className="img img-fluid" src={url} alt="game" />
        <p>{name}</p>
        <p>{ratings}</p>
        <p>{children}</p>
        </article>
    )
}
ReactDOM.render(<GameList/>,document.getElementById('root'))