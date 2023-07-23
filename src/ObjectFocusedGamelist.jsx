import games from "./games";
// const names = ['pratham','tony','thor'];
// const newNames = names.map((name)=>{
//     return <h1>{name}</h1>
// })
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
    <article className="game" >
      <img className="img img-fluid" src={imgURL} alt="game" />
      <h5>{name}</h5>
      <h6>{ratings}</h6>
    </article>
  );
};
export default Gamelist;