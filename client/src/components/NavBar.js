import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CoffeeContext } from './Context/coffee';

function NavBar(){
  const {user,logoutUser} = useContext(CoffeeContext)
        return(
<header>
<div>
  {user ? (
    <button onClick={logoutUser}>Logout</button>
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