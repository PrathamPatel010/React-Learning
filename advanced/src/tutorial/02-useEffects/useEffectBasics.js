import React,{useEffect, useState} from 'react'

const UseEffectBasics = () => {
    const [value,setValue] = useState(0);
    
    // useEffect will run whenever page is rendered.
    // if we pass dependency list, then that particular useEffect will run only when
    // that dependency element is changed. otherwise, it won't be called.
    // if we don't pass any dependency list, it will run each & every time component is rendered.
    useEffect(()=>{
        console.log(`useEffect called`);
        if(value>=1){
            document.title = `New Messages! ${value}`;
        }
    },[value])


    console.log(`render component`);
    return(
        <div className="text-center mt-5">
            <h1>useEffect Basics</h1>
            <h2>{value}</h2>
            <button className="btn btn-primary" onClick={()=>setValue(value+1)}>Click me</button>
        </div>
    )
}

export default UseEffectBasics;