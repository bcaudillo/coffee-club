import { createContext,useState } from "react";

const CoffeeContext = createContext(null);

const CoffeeProvider = ({children}) =>{

    const [user, setUser]= useState(null);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    
    const [coffee, setCoffee] = useState([])

    const loadCoffee = () =>{
            fetch("/coffee")
            .then(r=>r.json())
            .then(coffee =>setCoffee(coffee)) 
          }
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
        <CoffeeContext.Provider value= {{
            user, 
            setUser,
            username,
            setUsername,
            password,
            setPassword,
            passwordConfirmation,
            setPasswordConfirmation,
            coffee,
            setCoffee,
            loadCoffee,
            logoutUser,
            handleLogin
            }}>
            {children}
        </CoffeeContext.Provider>
        
    ) 
        }

export {CoffeeProvider, CoffeeContext};