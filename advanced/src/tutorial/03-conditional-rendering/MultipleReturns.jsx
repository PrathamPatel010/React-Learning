import React,{useState,useEffect} from 'react'

const MultipleReturns = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);
    const [user,setUser] = useState('default user');
    const url = "https://api.github.com/users/QuincyLarson";    
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!(res.status>=200 && res.status<=299)){
                setIsLoading(false);
                setIsError(true);
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .then((user)=>{
            // console.log(user);
            const {login} = user;
            setUser(login);
            setIsLoading(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);
    
    if(isLoading){
        return <h1>Loading</h1>
    }
    if(isError){
        return <h1>Error!</h1>
    }
    return(
        <div className="text-center my-5">
            <h1>{user}</h1>
        </div>
    )
}

export default MultipleReturns;