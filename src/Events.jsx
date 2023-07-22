const games = [
    {
        id:1,
        imgURL:'https://m.media-amazon.com/images/I/413k8MW+jPL._SY445_SX342_.jpg',
        name:'Spiderman Remastered',
        ratings:`ratings:${99/10}/10`
    },
    {
        id:2,
        imgURL:"https://m.media-amazon.com/images/I/811umGHYORL._SX679_.jpg",
        name:"Miles-morale",
        ratings:`ratings:${80/10}/10`
    },
    {
        id:3,
        imgURL:"https://m.media-amazon.com/images/I/51+j71XPpmL._SX342_SY445_.jpg",
        name:"Marvels Avengers",
        ratings:`ratings:${85/10}/10`,
    },
    {
        id:4,
        imgURL:"https://m.media-amazon.com/images/I/513QfJgiU9L._SX300_SY300_QL70_FMwebp_.jpg",
        name:"GTA V",
        ratings:`ratings:${95/10}/10`

    },
    {
        id:5,
        imgURL:"https://m.media-amazon.com/images/I/61bP14H0D0L._SX300_SY300_QL70_FMwebp_.jpg",
        name:"GTA SA",
        ratings:`ratings:${75/10}/10`,
    }
]

function Gamelist() {
  return (
    <section>
      <div className="container">
        <h1 className="text-center my-5">Game-list using List Object</h1>
        <div className="row">
          {games.map((game) => (
            <div key={game.id} className="col-md-4">
              <Game game={game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Game = (props) => {
  const { imgURL, name, ratings } = props.game;
  return (
    <article className="game" onMouseOver={()=>mouseEvent(props.game)}>
      <img className="img img-fluid" src={imgURL} alt="game" />
      <h5>{name}</h5>
      <h6>{ratings}</h6>
      <button className="btn btn-secondary" type="button" onClick={buttonHandler}>Download through steam</button>
      <button className="btn btn-primary" type="button" onClick={()=>printData(props.game)}>Another Button</button>
    </article>
  );
};

function mouseEvent(game){
    console.log(game.name);
}

function printData(game){
    console.log(game);
}

function buttonHandler(e){
    console.log(e);
    console.log(e.target);  // return whole button which is clicked
}
export default Gamelist;