import React, { useState } from 'react';
import data from '../../data';
import Modal from './modal';

const Index = () => {
    const [name,setName] = useState('');
    const [people,setPeople] = useState(data);
    const [showModal,setShowModal] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        if(name){
            setShowModal(true);
            setPeople([...people,{id:new Date().getTime().toString(),name}]);
            setName('');
        } else{
            setShowModal(true);
        }
    }
    return (
        <>
        {setShowModal && <Modal/>}
        <form onSubmit={handleSubmit} className="my-5 text-center">
            <div className="container">
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className="container my-3">
                <button type="submit" className="btn btn-danger">Add</button>
            </div>    
        </form>
        {people.map((person)=>{
        return(
              <div key={person.id} className="d-flex align-items-center justify-content-center">
                  <h4>{person.name}</h4>
              </div>
        )  
        })}
        </>
    )
}

export default Index;