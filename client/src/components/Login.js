import React, {useContext, useState} from "react";
import {Form} from "semantic-ui-react";
import { CoffeeContext } from "./Context/coffee";



function Login(){
  
  const {password, setPassword, username, setUsername, loginSubmit} = useContext(CoffeeContext)
   
      return(
        
    <Form onSubmit ={loginSubmit}>
        <h1>Coffee Shop</h1>
        <h3>Login</h3>
         

        <Form.Group widths="equal">
            <Form.Input
            fluid
            placeholder ="username"
            name ="username"
            value = {username}
            onChange = { (e) => setUsername(e.target.value)}
            >
            </Form.Input>
            <Form.Input
            fluid
            placeholder ="password"
            name ="password"
            value = {password}
            onChange = {(e)=> setPassword(e.target.value)}
            >
            </Form.Input>
            <Form.Button>Submit</Form.Button>

        </Form.Group>
        </Form>
    )
}
export default Login;
