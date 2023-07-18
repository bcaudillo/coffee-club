import { createContext,useState } from "react";

const CoffeeContext = createContext(null);

//change name to dataprovider or something
const CoffeeProvider = ({children}) =>{
    const [user, setUser]= useState(null);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [coffee, setCoffee] = useState([])
    const [passwordConfirmation, setPasswordConfirmation] =useState('')
    const [comment, setComment] = useState("")
    const [contributions, setContributions] = useState([])
    
    console.log(coffee)
    console.log(user)
    const autoLogin = () =>{
        // auto-login
        fetch(`/me`)
        .then((r) => {
          if (r.ok) {
            r.json().then((fetchedUser) => setUser(fetchedUser));
        }})
    }
    const loadCoffee = () =>{
            fetch("/coffees")
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
            autoLogin,
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
            handleLogin,
            comment,
            setComment,
            contributions,
            setContributions
            }}>
            {children}
        </CoffeeContext.Provider>
        
    ) 
        }

export {CoffeeProvider, CoffeeContext};