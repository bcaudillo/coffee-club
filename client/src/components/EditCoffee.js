import React, { useState, useContext } from 'react';
import { CoffeeContext } from './Context/coffee';


function EditCoffee(){
    const [name, setName] = useState("")
    const [origin, setOrigin]= useState("")
    const [notes, setNotes] = useState("")
    const [errors, setErrors] = useState([])

    // function onUpdateReview(reviewId){
    //       const updatedReviews = coffeeChild.reviews.filter((review) => review.id !== reviewId);
  
    //          const updatedCoffee = {
    //           ...coffeeChild, 
    //           reviews: updatedReviews
    //         }
    //         const updatedCoffeeList = coffee.map((coffeeItem)=>{
    //           if(coffeeItem.id == updatedCoffee.id){
    //             return updatedCoffee
    //           } 
    //           return coffeeItem
    //         })
    //         setCoffee(updatedCoffeeList)
    //       }
        

    //     function handleUpdateReview(e) {
    //       console.log(e)
          
    //       fetch(`/reviews`, {
    //         method: "PATCH",
    //         headers: {
    //           "Accept": "application/json",
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //           "comment": comment,
    //           "username": username,
    //           "user_id": user.id,
    //           "coffee_id": coffeeChild.id,
    //         }),
    //       }).then((r) => {
    //         if (r.ok) {
    //           r.json().then((comment) => onAddReview(comment));
    //         } 
    //       });
    //     }

        return(
            <div>
                <h1>Make a correction:</h1>
            <form >
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