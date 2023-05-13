import React, {useContext, useState, useEffect} from "react";
import { Switch, Route} from 'react-router-dom'
import Login from './Login';
import Signup from './SignUp';
import NavBar from "./NavBar";
import CoffeeList from "./CoffeeList";
import Home from "./Home";
import { CoffeeContext } from "./Context/coffee";

function App() {

  const {loadCoffee, user} = useContext(CoffeeContext)

  useEffect(()=>{
    loadCoffee()
  },[])


  

  return(
    <>
    <NavBar />
    <main>
      {user?(
        <Switch>
          <Route path = "/coffee">
            <CoffeeList />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path = "/signup">
            <Signup />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path ="/">
            <Home />
          </Route>
        </Switch>
      )}


    
    </main>
    </>
    )
  }
  
  export default App;
  
  
