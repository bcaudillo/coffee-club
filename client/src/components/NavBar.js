import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CoffeeContext } from './Context/coffee';
import CoffeeList from './CoffeeList'

function NavBar(){
  const {user,logoutUser} = useContext(CoffeeContext)
        return(
<header>
<div>
  {user ? (
    
    <CoffeeList />
    
    
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