// using CSS and nested components
function GameList1(){
    return (
        <div className="container">
        <section className="text-center"><h1 className="mb-5">This will be a game list</h1></section>
        <div className="row">
            <div className="col-md-3">
                <Game/>
            </div>
            <div className="col-md-3">
                <Game/>
            </div>
            <div className="col-md-3">
                <Game/>
            </div>
            <div className="col-md-3">
                <Game/>
            </div>
            <div className="col-md-3">
                <Game/>
            </div>
            <div className="col-md-3">
                <Game/>
            </div>
            <div className="col-md-3">
                <Game/>
            </div>
        </div>
        </div>
        );
}

const Game = () => {
    return (
        <article className="game">
        <img className="img img-fluid my-3" src="https://m.media-amazon.com/images/I/512jQQf0loL._SY500_.jpg" alt="game" /> 
        <h6 style={{fontSize:'0.75rem'}}>Marvel's Spider Man-Remastered (Steam PC Code - Email Delivery)</h6>
        <small>By PlayStation PC</small>
        </article>
    )
}

export default GameList1;