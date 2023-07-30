import React, { useState,useReducer,useRef, useEffect} from 'react';
import Modal from './modal';
import reducer from './reducer';

const defaultState = {  
    people:[],
    isModalOpen:false,
    modalContent:'',
}

const Index = () => {
    const refInput = useRef(null);
    const [name,setName] = useState('');
    const [state,dispatch] = useReducer(reducer,defaultState);
    function handleSubmit(e){
        e.preventDefault();
        if(name){
            const newItem = {id:new Date().getTime().toString(),name};
            dispatch({type:'ADD_ITEM',payload:newItem});
            setName('');
        } else{
            dispatch({type:'NO_VALUE'});
        }
    }
    useEffect(()=>{
        refInput.current.focus();
    })
    const closeModal = () => {
        dispatch({type:'CLOSE_MODAL'});
    }
    return (
        <>
        {state.isModalOpen && <Modal modelContent={state.modalContent} modalclose={closeModal}/>}
        <form onSubmit={handleSubmit} className="my-5 text-center">
            <div className="container">
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} ref={refInput}/>
            </div>
            <div className="container my-3">
                <button type="submit" className="btn btn-success">Add</button>
            </div>    
        </form>
        {state.people.map((person)=>{
        return(
              <div key={person.id} className="d-flex align-items-center justify-content-center">
                  <h4>{person.name}</h4>
                  <button className="btn btn-danger mx-3" onClick={(e)=>{dispatch({type:'REMOVE_ITEM',payload:person.id})}}>Delete</button>
              </div>
        )  
        })}
        </>
    )
}

export default Index;