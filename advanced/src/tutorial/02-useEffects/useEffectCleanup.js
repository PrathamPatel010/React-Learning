import React,{useState,useEffect} from 'react'

const UseEffectCleanup = () =>{
    const [size,setSize] = useState(window.innerWidth);

    function checkSize(){
      setSize(window.innerWidth)
    }

    useEffect(()=>{
      console.log(`useEffect called`);
      window.addEventListener('resize',checkSize);
      return ()=>{
        console.log(`cleanup`);
        window.removeEventListener('resize',checkSize);
      }
    })

    return(
      <div className="text-center my-5">
      <h1>Window</h1>
      <h2>{size} px</h2>
      </div>
    )
}

export default UseEffectCleanup; 