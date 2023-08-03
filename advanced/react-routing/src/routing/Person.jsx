import React,{useState,useEffect} from 'react';
import data from '../data';
import {Link, useParams} from 'react-router-dom';
const Person = () => {
    console.log(useParams());
    const {id} = useParams();
    const[name,setName] = useState('default name');
    useEffect(()=>{
        const newPerson = data.find((person)=>person.id===parseInt(id));
        setName(newPerson.name);
    },[id])
    return (
        <div className="d-flex justify-content-center">
            <h2>{name}</h2>
            <Link to="/people" className="btn btn-secondary mx-3">Back To People Page</Link>
        </div>
    )
}

export default Person;