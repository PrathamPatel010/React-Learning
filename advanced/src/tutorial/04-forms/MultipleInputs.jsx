import React,{useState} from 'react'

const MultipleInputs = () => {
    // const [firstName,setFirstName] = useState('');
    // const [email,setEmail] = useState('');
    // const [age,setAge] = useState('');
    const [person,setPerson] = useState({firstName:'',age:'',email:''});
    const [people,setPeople] = useState([]);
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person,[name]:value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(person.firstName && person.email){
            const newPerson = {...person,id:new Date().getTime().toString()}
            setPeople([...people,newPerson]);
            console.log(people);
            setPerson({firstName:'',age:'',email:''})
        }
    }
    


    return (
        <>
        <div className="container-form text-center">
            <article className="article-form form-control my-5">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="text-center">
                        <h1>Form</h1>
                    </div>
                    <div>
                        <label htmlFor="firstName">Name:</label>
                        <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange}/>
                    </div>
                    <div className="my-3">
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age" value={person.age} onChange={handleChange} />
                    </div>
                    <div className="my-3">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" value={person.email} onChange={handleChange}/>
                    </div>
                    <div className="my-3 text-center">
                        <button type="submit" className="btn btn-success">Add Person</button>
                    </div>
                </form>
            </article>
        </div>

        <div className="user-list text-center">
            {
                people.map((person)=>{
                    const{id,firstName,age,email} = person;
                    return (
                        <div className="user-list d-inline" key={id}>
                            <h3>{firstName} {age}                {email}</h3>        
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default MultipleInputs;