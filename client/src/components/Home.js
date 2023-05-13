import {Link} from "react-router-dom"

function Home({ user }) {
  if (user) {
    return <h1>Welcome, {user.username}!</h1>;
  } else {
    return (<p>
        <h1>Please Login or Sign Up</h1>
        <Link to="/login">Click here to login</Link>
        <br></br>
        <Link to = "/signup">Click here to sign up</Link>
        </p>

 );

  }
}

export default Home;
