import React,{useState,useContext} from 'react'
import data from '../../data';

const PersonContext = React.createContext();
// Two Components : Provider and Consumer

const ContextAPI = () => {
    const [people,setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people)=>{
            return people.filter((person)=>person.id!==id);
        });
    };
    return(
        <PersonContext.Provider value={{removePerson,people}}>
        <section className="text-center mt-4">
            <h3>Context API</h3>
            <List/>
        </section>
        </PersonContext.Provider>
    )   
}

const List = () => {
    const {people} = useContext(PersonContext);
    return(
        <section className="my-5">
            {people.map((person)=>{
                return(
                    <SinglePerson key={person.id} id={person.id} name={person.name}/>
                )
            })}
        </section>
    )
}

const SinglePerson = ({id,name}) => {
    const {removePerson} = useContext(PersonContext);
    return(
        <div className="people my-3 d-flex justify-content-center">
            <h4>{name}</h4>
            <button className="btn btn-danger mx-3" onClick={()=>{removePerson(id)}}>Delete</button>
        </div>
    )
}

export default ContextAPI;