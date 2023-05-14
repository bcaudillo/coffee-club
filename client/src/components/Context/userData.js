import { createContext,useContext } from "react";

const userDataContext = createContext(null)

const userDataProvider = ({children}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    

    const logoutUser = () =>{
        fetch("/logout", {
            method: "DELETE",
          }).then(() => handleLogout());
    }

    function handleLogin(user) {
        setUser(user);
      }
    
      function handleLogout() {
        setUser(null);
      }

   return(
   <userDataContext.Provider value={{
        user, 
        setUser,
        username,
        setUsername,
        password,
        setPassword,
        passwordConfirmation,
        setPasswordConfirmation,
        logoutUser,
        handleLogin
    }}>
    {children}
    </userDataContext.Provider>
   ) 
}

export {userDataContext, userDataProvider};