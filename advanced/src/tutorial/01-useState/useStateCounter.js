import { React, useState } from "react";

function UseStateCounter(){
    const [counter,setCounter] = useState(0);
    function increaseComplex(){
        setTimeout(()=>{
            // setCounter(counter+1)    // if we use this, we will get old value.
            setCounter((prevCount)=>{   // this will return value from current state and we can get the correct value of counter
                return prevCount+1;
            })
        },2000)
    }
    return (
        <>
            <section className="text-center my-5">
                <h3>Regular Counter</h3>
                <div className="container">
                    <h1>{counter}</h1>
                    <div className="container">
                    </div>
                    <div className="container my-4">
                        <button className="btn btn-secondary mx-2" onClick={()=>setCounter(counter-1)}>Decrease</button>
                        <button className="btn btn-secondary" onClick={()=>setCounter(0)}>Reset</button>
                        <button className="btn btn-secondary mx-2" onClick={()=>{setCounter(counter+1)}}>Increase</button>
                    </div>
                </div>
            </section>

            <section className="text-center my-5">
                <h3>More Complex Counter</h3>
                <div className="container">
                    <h1>{counter}</h1>
                    <div className="container">
                    </div>
                    <div className="container my-4">
                        <button className="btn btn-secondary mx-2" onClick={()=>increaseComplex()}>Asynchronous Increase</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UseStateCounter;