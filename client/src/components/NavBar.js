import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CoffeeContext } from './Context/coffee';
import CoffeeList from './CoffeeList'
import Header from './Header';

function NavBar(){
  const {user,logoutUser} = useContext(CoffeeContext)
        return(
<header>
  <Link to = '/coffee'>CoffeeList</Link>
<div>
  {user ? (
    <p>
       <Header/>   
    </p>
    ) : (
    <>
      <Link to="/">Home</Link>
    </>
  )}
</div>
</header>
       
)


  }

export default NavBar