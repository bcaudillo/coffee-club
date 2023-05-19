import React, {useContext, useEffect} from "react";
import { Switch, Route} from 'react-router-dom'
import Login from './Login';
import Signup from './SignUp';
import NavBar from "./NavBar";
import CoffeeList from "./CoffeeList";
import Home from "./Home";
import { CoffeeContext } from "./Context/coffee";
import { UserDataContext } from "./Context/userData";
import Favotires from "./Favorites";

function App() {

  const {user, loadCoffee} = useContext(CoffeeContext)
  // const {user} = useContext(UserDataContext)

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
          <Route path ="/favorites">
            <Favotires />
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
  
  
