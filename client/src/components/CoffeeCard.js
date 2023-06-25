import React, { useState, useContext, useEffect } from 'react';
import { CoffeeContext } from './Context/coffee';

function  CoffeeCard ({coffeeChild}){
  const {username,user, setCoffee, coffee} = useContext(CoffeeContext)
  const [comment, setComment] = useState("") 
  const [errors, setErrors] = useState({})
  

        function onDeleteReview(reviewId) {
          
          const updatedReviews = coffeeChild.reviews.filter((review) => review.id !== reviewId);
          const updatedCoffee = {
            ...coffeeChild, 
            reviews: updatedReviews
          }
          const updatedCoffeeList = coffee.map((coffeeItem)=>{
            if(coffeeItem.id == updatedCoffee.id){
              return updatedCoffee
            } 
            return coffeeItem
          })
          setCoffee(updatedCoffeeList)
        }
        function handleDeleteReview(reviewId){ 
          console.log(reviewId)
          fetch(`/reviews/${reviewId}`,{
            method: "DELETE"
          })
          .then(onDeleteReview(reviewId))
        }
        
        function handleDeleteCoffee(coffeeToDelete){
          fetch(`/coffee/${coffeeToDelete}`,{
            method: "DELETE"
          })
          .then(onDeleteCoffee(coffeeToDelete))
        }
        function onDeleteCoffee(coffeeToDelete){
          console.log(coffeeToDelete)
          const updatedCoffees = coffee.filter((coffee)=> coffeeToDelete !== coffee.id);
          setCoffee(updatedCoffees)
        }
        
        function handleAddReview(e) {
          e.preventDefault()
          
          fetch(`/reviews`, {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "comment": comment,
              "username": username,
              "user_id": user.id,
              "coffee_id": coffeeChild.id,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((comment) => onAddReview(comment));
            } else {
              r.json().then((errorData) => setErrors(errorData.error));
              alert(errors)
            }
          });
        }
        
        function onAddReview(newComment){
          const updatedReviews = coffeeChild.reviews.filter((review) => review.id !== newComment.id);
          console.log(updatedReviews)
          const updatedCoffee = {
            ...coffeeChild, 
            reviews: [...updatedReviews, newComment]
          }
          const updatedCoffeeList = coffee.map((coffeeItem)=>{
            if(coffeeItem.id == updatedCoffee.id){
              return updatedCoffee
            } 
            return coffeeItem
          })
          setCoffee(updatedCoffeeList)
        }
      

     


    return(
      <div>
      <h2>{coffeeChild.name}</h2>
        <button onClick={()=>handleDeleteCoffee(coffeeChild.id)}>remove your coffee</button>
      <p>Origin: {coffeeChild.origin}</p>
      <p>Notes: {coffeeChild.notes}</p>

      
        <div>
       
              <div>
                
              <form onClick={handleAddReview}>
                <label htmlFor="comments">What are your thoughts?</label>
                  <input
                    type="text"
                    id="comments"
                    autoComplete="off"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button type="submit">Submit</button></form>
              </div>
          
          <h3>What others are saying:</h3>
          {coffeeChild.reviews !== undefined ? (
            coffeeChild.reviews.map(review => (
              <div key={review.id}>
                <h4>{review.username} wrote:</h4>
                <p>Comment: {review.comment}</p>
                {console.log(coffeeChild.reviews.user_id)}
                {user.id === review.user_id ? ( <button onClick={() => handleDeleteReview(review.id)}>Remove</button>,<button onClick={()=>handleEditReview(review.id)}>Edit</button>) : null}
              </div>
            ))
          ) : (
            <p>No reviews found.</p>
          )}
        </div>
      
    </div>
  );
};



export default CoffeeCard