import { React, useState} from "react";
import data from "../../data";

function UseStateArray(){
    const [people,setPeople] = useState(data);
    const RemoveItem = (id) => {
        let newPeople = people.filter((person)=> person.id !== id);
        setPeople(newPeople);
    }

    return (
        <div className="my-5">
            {
                people.map((person)=>{
                    const {name,id} = person;
                    return (
                        <div className="container text-center">
                            <h2>Id:{id}     Name:{name}</h2>
                            <button className="btn-primary" onClick={()=>RemoveItem(id)}>Delete</button>
                        </div>
                    )
                })
            }
            <div className="text-center">
                <button className="btn btn-danger" onClick={()=>setPeople([])}>Clear All Items</button>
            </div>
        </div>
    )
}

export default UseStateArray;