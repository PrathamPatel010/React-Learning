import React,{useState,useEffect} from 'react'

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
    const [users,setUsers] = useState([]);   
    
    const getUsers = async() => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        console.log(users);
    };

    useEffect(()=>{
        getUsers();
    },[])
    return (
    <>
      <div className="text-center my-5">
          <h1>useEffect Fetch Data</h1>
          <h1>GitHub Users</h1>
      </div>
      <div className="container">
          <div className="row">
              {users.map((user)=>{
                  const {id,login,avatar_url,html_url} = user;
                  return(
                      <div className="col-12 col-md-3 my-3 git-profile text-center column-gap-5">
                          <h4>ID:{id}</h4>
                          <h4>Username:{login}</h4>
                          <img className="img img-fluid profile-photo" src={avatar_url} alt={login} /><br/>
                          <a href={html_url} className="btn btn-primary">Profile Link</a>
                      </div>
                  )
              })}
          </div>
      </div>
    </>
  )
}

export default UseEffectFetchData;
