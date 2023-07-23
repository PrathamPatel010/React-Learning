import { React, useState } from "react";

function UseStateObject() {
    // const [person,setPerson] = useState({
    //     name:'Pratham',
    //     age:20,
    //     message:'I love you',
    // })
    // const changeMessage = () => {
    //     // setPerson({message:"Hello"});
    //     setPerson({...person,message:"Nobody loves me"});
    // }

    // another way is using multiple states
    const [name,setName] = useState('Pratham');
    const [age,setAge] = useState('20');
    const [message,setMessage] = useState('Everybody loves me!');

    return (
        <>
        <div className="container text-center mt-5">
            <div className="container">
                <h2>{age}</h2>
            </div>
            <div className="container">
                <h2>{name}</h2>
            </div>
            <div className="container">
                <h2>{message}</h2>
            </div>
        </div>
        <div className="text-center">
            <button className="btn btn-success" onClick={()=>{setAge(21);setName('Pratham');setMessage('Nobody loves me')}}>Change values</button>
        </div>
        </>
    )
}

export default UseStateObject;