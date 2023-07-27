import React, {useContext, useEffect} from "react";
import { Switch, Route} from 'react-router-dom'
import Login from './Login';
import Signup from './SignUp';
import NavBar from "./NavBar";
import CoffeeList from "./CoffeeList";
import Home from "./Home";
import { CoffeeContext } from "./Context/coffee";
import AddCoffee from "./AddCoffee"
import EditCoffee from './EditCoffee'
import MyReviews from "./MyReviews";


function App() {

  const {autoLogin, user, loadCoffee,setUser} = useContext(CoffeeContext)


  useEffect(()=>{
    loadCoffee()
    autoLogin()
  }, []);
 
  

  return(
    <>
    <NavBar />
    <main>
      
      {user?(
        <Switch>
          <Route path = "/coffees">
            <CoffeeList />
          </Route>
          <Route path ="/addcoffee">
            <AddCoffee />
          </Route>
          <Route path ="/editcoffee">
            <EditCoffee />
          </Route>
          <Route path ="/myreviews">
            <MyReviews />
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
          <Route path = "/">
            <Home />
          </Route>
        </Switch>
      )}
    
    </main>
    </>
    )
  }
  
  export default App;
  
  
