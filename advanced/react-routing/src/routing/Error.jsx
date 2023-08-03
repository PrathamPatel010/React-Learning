import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return(
        <>
        <h2>Error Occured!</h2>
        <Link to="/" className="btn btn-success">Back To Homepage</Link>
        </>
    )
}

export default ErrorPage;