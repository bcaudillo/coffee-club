// import { createContext,useState } from "react";

// const FunctionsContext = createContext(null);

// //change name to dataprovider or something
// const FunctionsProvider = ({children}) =>{

//     console.log(coffee)
//     console.log(user)
//     const autoLogin = () =>{
//         // auto-login
//         fetch(`/me`)
//         .then((r) => {
//           if (r.ok) {
//             r.json().then((fetchedUser) => setUser(fetchedUser));
//         }})
//     }
//     const loadCoffee = () =>{
//             fetch("/coffees")
//             .then(r=>r.json())
//             .then(coffee =>setCoffee(coffee)) 
//           }
//     const logoutUser = () =>{
//         fetch("/logout", {
//             method: "DELETE",
//           }).then(() => handleLogout());
//     }

//     function handleLogin(user) {
//         setUser(user);
//       }
    
//       function handleLogout() {
//         setUser(null);
//       }

//       function handleSubmit(e) {
//         e.preventDefault();
//         fetch("/login", {
//           method: "POST",
//           header: {
//           "Accept": "application/json",
//           "Content-Type": "application/json"},
//           body: JSON.stringify({ username, password }),
//         }).then((r) => {
//           if (r.ok) {
//             r.json().then((user) => setUser(user));
//           }
//         });
//       }
//     return(
//         <FunctionsContext.Provider value= {{
//             autoLogin,
//             user, 
//             setUser,
//             username,
//             setUsername,
//             password,
//             setPassword,
//             passwordConfirmation,
//             setPasswordConfirmation,
//             coffee,
//             setCoffee,
//             loadCoffee,
//             logoutUser,
//             handleSubmit,
//             handleLogin,
//             comment,
//             setComment,
//             contributions,
//             setContributions
//             }}>
//             {children}
//         </FunctionsContext.Provider>
        
//     ) 
//         }

// export {FunctionsProvider, FunctionsContext};