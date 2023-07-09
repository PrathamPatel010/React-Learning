import React from 'react'
const testing = () => {
  function handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name');
    const password = document.getElementById('password');
    const userInfo = {name:name.value,password:password.value};
    console.log(userInfo);
    name.value = '';
    password.value = '';
  }
  return (
    <div className="text-center"> 
    <h3>***Using Imported Component***</h3>
    <h3>Component testing successfull</h3>
    <div className="container text-center">
      <form action="www.google.com" method="get" onSubmit={handleSubmit} className="my-3">
        <div className="container my-3">
          <label htmlFor="username">Username</label>
          <input type="text" id="name" className="mx-3" />
        </div>
        <div className="container my-3">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="mx-3" />
        </div>
        <div className="container my-3">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default testing
