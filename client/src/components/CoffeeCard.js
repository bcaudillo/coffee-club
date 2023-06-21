import React, { useState, useContext } from 'react';
import { CoffeeContext } from './Context/coffee';

function  CoffeeCard ({key, coffeeChild}){
  const {username,user, setCoffee, coffee} = useContext(CoffeeContext)
  const [comment, setComment] = useState("") 

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
          console.log(e)
          
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
            } 
          });
        }
        
        function onAddReview(newComment){
          setComment([...comment, newComment])
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
          {coffeeChild.reviews.map(review => (
            <div key={review.id}>
              <h4>{review.username} wrote:</h4>
              <p>Comment: {review.comment}</p>
              <button onClick={()=> handleDeleteReview(review.id)}>Remove</button>
              {/* <button onClick ={onUpdateReview}>Edit</button> */}
        

            </div>
          ))}
        </div>
      
    </div>
  );
};



export default CoffeeCard