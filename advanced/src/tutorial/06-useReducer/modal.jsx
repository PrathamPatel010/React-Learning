import React, { useEffect } from 'react';

const Modal = ({modelContent,modalclose}) => {
    useEffect(()=>{
        setTimeout(()=>{
            modalclose();
        },3000)   
    })
    
    return (
    <h4 className="d-flex align-items-center justify-content-center my-4">
        {modelContent}
    </h4>
    )
};

export default Modal;