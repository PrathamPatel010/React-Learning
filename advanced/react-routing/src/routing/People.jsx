import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

const People = () => {
    const [people] = useState(data);
    return (
        <div className="text-center">
            <h1>People</h1>
            {people.map((person)=>{
                return(
                    <div key={person.id} className="my-3 d-flex justify-content-center">
                        <h4>{person.name}</h4>
                        <Link to={`/person/${person.id}`} className="mx-3 btn btn-primary">Learn More</Link>
                    </div>
                )
            })
            }
        </div>
    )
}

export default People;