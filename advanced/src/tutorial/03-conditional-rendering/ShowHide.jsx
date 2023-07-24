import React, { useState,useEffect } from 'react'

const ShowHide = () => {

    const [show,setShow] = useState(false);
    return(
        <div className="text-center my-5">
            <h1>Show Hide</h1>
            <button className="btn btn-primary" onClick={()=>setShow(!show)}>Show/Hide</button>
            {show && <Item/>}
        </div>
    )
}

const Item = () => {
    const [size,setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize',checkSize);      
      return () => {
        window.addEventListener('resize',checkSize);  
    }
    }, [])
    
    return (
        <div className="text-center">
            <h1>Window size: {size}px</h1>
        </div>
    )
}

export default ShowHide;
