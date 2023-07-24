import React,{useState} from 'react'

const ShortCircuit = () => {
    const [text,setText] = useState('');
    // const firstValue = text || 'hello world';
    // const secondValue = text && 'hello world';
    return(
        <div className="text-center">
            <h1>Short Circuit</h1>
            {/* <h1>First Value: {firstValue}</h1> */}
            {/* <h2>Second value: {secondValue}</h2> */}
            {text || <h1>Pratham Patel</h1>}
            {text && <h1>Hello World</h1>}
            {!text && <h1>Hello World</h1>}
        </div>
    )
}

export default ShortCircuit;