import games from "./games";

function Gamelist() {
  return (
    <section>
      <div className="container">
        <h1 className="text-center my-5">Game-list using React</h1>
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
      <button className="btn btn-secondary" type="button" onClick={buttonHandler}>Get Button Element</button>
      <button className="btn mx-2 my-1 btn-primary" type="button" onClick={()=>printData(props.game)}>Get Game Info</button>
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