import { Link } from "react-router-dom";
import { useContext,useEffect } from "react";
import { CoffeeContext } from "./Context/coffee";


function Header() {
  const {logoutUser, setUser, user} = useContext(CoffeeContext)



  return (
    <header>     
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Click Here to Login</Link>
      )}
    </header>
  );
}

export default Header;

