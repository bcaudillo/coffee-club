import React, {useContext, useState} from "react";
import {Form} from "semantic-ui-react";
import { CoffeeContext } from "./Context/coffee";
import { Link } from "react-router-dom";



function Login(){
  
  const [errors,setErrors] = useState([])
  const {user,setUser, password, setPassword, username, setUsername} = useContext(CoffeeContext)
  console.log(user)
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify({ username, password }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
      else {
        r.json().then((errorData) => setErrors(errorData));
        alert(errors.error)
      }
    });
  }
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <h1>Coffee Club</h1>
        <h3>Login</h3>
      </div>
  
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
export default Login;
