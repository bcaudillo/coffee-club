import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CoffeeContext } from './Context/coffee';
import CoffeeList from './CoffeeList'
import Header from './Header';

function NavBar(){
  const {user,logoutUser} = useContext(CoffeeContext)
        return(
<header>  
<img src="https://www.pngkit.com/png/full/97-978425_coffee-beans-png-transparent-image-coffee-beans-on.png"  alt="Coffee Beans" />

    <div>
      {user ? (
        <p>
            <Link to= "/coffees">See list</Link>
            <br>
            </br>
            <Link to = "/addcoffee">Add your own blend</Link>
            <br>
          </br>
          <Link to ="/editcoffee">Edit your entries</Link>
          
          <Header/>   
        </p>
        ) : null}
    </div>
    </header>
       
)


  }

export default NavBar