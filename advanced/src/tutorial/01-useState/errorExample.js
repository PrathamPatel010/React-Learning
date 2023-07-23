import React from 'react';

const ErrorExample = () => {
    let title=`Random Title`;
    const handleClick = () => {
        title=`Hello People!`;
        console.log(title);        
    }
    return (
        <>
        <div className="container text-center my-3">
            <h2>{title}</h2>
        </div>
        <div className="container text-center">
            <button className="btn btn-secondary" onClick={handleClick}>Change Title</button>
        </div>
        </>
    )
}

export default ErrorExample;