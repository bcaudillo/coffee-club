import { createContext,useState } from "react";

const CoffeeContext = createContext(null);

const CoffeeProvider = ({children}) =>{
    const [user, setUser]= useState(null);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [coffee, setCoffee] = useState([])
    const [passwordConfirmation, setPasswordConfirmation] =useState('')

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

      function handleSubmit(e) {
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
            handleSubmit,
            handleLogin
            }}>
            {children}
        </CoffeeContext.Provider>
        
    ) 
        }

export {CoffeeProvider, CoffeeContext};