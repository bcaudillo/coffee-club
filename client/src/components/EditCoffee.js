import React, { useState, useContext } from 'react';
import { CoffeeContext } from './Context/coffee';
import CoffeeList from './CoffeeList'


function EditCoffee(){
    const [name, setName] = useState("")
    const [origin, setOrigin]= useState("")
    const [notes, setNotes] = useState("")
    const [errors, setErrors] = useState([])
    const [coffeeId, setCoffeeId] = useState("")

    const {username,user, setCoffee, coffee} = useContext(CoffeeContext)
    //add user.blends like see list. 
    //more user friendly
    const userCoffeeList = coffee.filter((coffeeItem) => coffeeItem.user_id === user.id);
      
    console.log(userCoffeeList)
    function onEditCoffee(revisedCoffee) {
      console.log(coffee)
      const updatedCoffeeList = coffee.map(coffeeItem => {
        if (revisedCoffee.id === coffeeItem.id) {
          return revisedCoffee;
        }
        return coffeeItem;
      });
      setCoffee(updatedCoffeeList);
    }
  
      function handleSubmit(e){
        e.preventDefault();
        fetch(`/coffees/${coffeeId}`, {
          method: "PATCH",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            origin,
            notes,
            user_id: user.id,
            coffeeId
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((newCoffee) => onEditCoffee(newCoffee));
            alert('coffee has been edited!')
          } else {
            r.json().then((errorData) => setErrors(errorData.errors));
            console.log(errors)
          }
        });
        
  
      }
      
        return(
       
            <div>
              {userCoffeeList.map((coffeeItem) => (
            <div key={coffeeItem.id}>
               <h2 style = {{color:' #556B2F'}}>{coffeeItem.name}  ☕️</h2>  
      {<h4 style = {{color: '#B7410E'}}>id: {coffeeItem.id} </h4>}

    
         <h4 style = {{color: 'brown'}}>Coffee Details</h4>
          <ul>
            <li>Origin: {coffeeItem.origin}</li>
            <li>Notes: {coffeeItem.notes}</li>
          </ul>
            </div>
          ))}
                <h1>Make a correction:</h1>
                <h4 style ={{color: 'red'}}>Coffee ID must be present to edit</h4>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <label htmlFor="origin">Origin: </label>
            <input
              type="text"
              id="origin"
              autoComplete="off"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
            <br></br>
            <label htmlFor="notes">Notes: </label>
            <input
              type="text"
              id="notes"
              autoComplete="off"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <br></br>
            <label htmlFor="coffeeId">Coffee ID: </label>
            <input
              type="text"
              id="coffeeId"
              autoComplete="off"
              value={coffeeId}
              onChange={(e) => setCoffeeId(e.target.value)}/>
              <br/>
  

            {errors.length > 0 && (
              <ul style={{ color: "red" }}>
          {errors.map((error) => (
            <li key={error}>{error}</li>
            ))}
        </ul>
      )}
      <button type="Submit">Share your blend</button>
          </form>

            </div>

    )
}

export default EditCoffee; 