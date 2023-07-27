import React, { useContext, useState } from "react";
import { CoffeeContext } from "./Context/coffee";
import { Link } from "react-router-dom";



function SignUp() {

const {setUser, username, setUsername, password, setPassword,passwordConfirmation, setPasswordConfirmation}= useContext(CoffeeContext)
const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } 
      else{
        r.json().then((data) =>setErrors(data))
      }
    });
  }

  return (
    <div>
      <Link to="/">Home</Link>
      
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <br></br>
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
          {errors.length > 0 && (
              <ul style={{ color: "red" }}>
          {errors.map((error) => (
            <li key={error}>{error}</li>
            ))}
        </ul>
      )}
        <br>
        </br>
        <button type="Submit">Sign Up</button>
      </form>
    </div>
  
  );
}

export default SignUp;
