import { Link } from "react-router-dom";
import { useContext } from "react";
import { CoffeeContext } from "./Context/coffee";
import Favorites from "./Favorites";

function Header() {
  const {logoutUser, user} = useContext(CoffeeContext)


  return (
    <header>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
            <Favorites/>

          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Click Here to Login</Link>
      )}
    </header>
  );
}

export default Header;
