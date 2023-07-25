import React,{useState} from 'react'

const ControlledInputs = () => {
    const [firstName,setFirstName] = useState('');
    const [email,setEmail] = useState('');
    const [people,setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName && email){
            const person = {id:new Date().getTime().toString(),firstName,email}; // ES6 module functionality: if key name matches with variable that holds the value. we can short-hand it.
            console.log(person);
            setPeople((people)=>{
                return [...people,person];
            });
            setFirstName('');
            setEmail('');
        } else{
            console.log(`Empty values`);
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
                        <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                    </div>
                    <div className="my-3">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
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
                    const{id,firstName,email} = person;
                    return (
                        <div className="user-list d-inline" key={id}>
                            <h3>{firstName}                 {email}</h3>        
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default ControlledInputs;
