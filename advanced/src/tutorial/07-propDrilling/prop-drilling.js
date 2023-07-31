import React,{useState} from 'react';
import data from '../../data';
// more components
// fix - context api, redux(for more complex cases)

const PropsDrilling = () => {
    const [people,setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people)=>{
            return people.filter((person)=>person.id!==id);
        });
    };
    return(
        <section className="text-center mt-4">
            <h3>Props Drilling</h3>
            <List people={people} removePerson={removePerson}/>
        </section>
    )
}

const List = ({people,removePerson}) => {
    return(
        <section className="my-5">
            {people.map((person)=>{
                return(
                    <SinglePerson key={person.id} id={person.id} name={person.name} removePerson={removePerson}/>
                )
            })}
        </section>

    )
}

const SinglePerson = ({id,name,removePerson}) => {
    return(
        <div className="people my-3 d-flex justify-content-center">
            <h4>{name}</h4>
            <button className="btn btn-danger mx-3" onClick={()=>{removePerson(id)}}>Delete</button>
        </div>
    )
}
export default PropsDrilling;