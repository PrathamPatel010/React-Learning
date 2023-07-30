import React,{useEffect,useRef} from 'react'

// preserve values like useState
// DOES not trigger re-render unlike useState
// target DOM elements

const useRefBasics = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current.textContent);
    }
    useEffect(()=>{
        console.log(refContainer.current);
        refContainer.current.focus();
    })
    
    return(
        <>
        <div className="my-4 text-center">
            <h1>UseRef Basics</h1>
        </div>
        <div>
            <form action="" className="text-center" onSubmit={handleSubmit}>
                <input className="" type="text" width="50px" ref={refContainer}/>
                <button type="submit" className="btn btn-danger mx-3">Submit</button>
            </form>
            <div ref={divContainer}>Hello World</div>
        </div>
        </>
    )
}

export default useRefBasics;