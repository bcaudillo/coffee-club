import { createContext, useState } from "react";

const FunctionsContext = createContext(null);

const FunctionProvider = ({children}) => {
  const [user, setUser] = useState(null)
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

      function loginSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          header: {
            "Accept": "application/json",
            "Content-Type": "application/json"},
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }
   return(
      <FunctionsContext.Provider value={{
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
      </FunctionsContext.Provider>
   ) 
}

export {FunctionProvider, FunctionsContext};