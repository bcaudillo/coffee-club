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
        
       function onEditReview(newReview) {
          console.log(newReview);
          const updatedReviews = coffeeChild.reviews.filter(review => review.id !== newReview.id);
          const updatedCoffee = {
            ...coffeeChild,
            reviews: updatedReviews
          };
          const updatedCoffeeList = coffee.map(coffeeItem => {
            if (coffeeItem.id === updatedCoffee.id) {
              return updatedCoffee;
            }
            return coffeeItem;
          });
          setCoffee(updatedCoffeeList);
        }


        function handleAddReview(e) {
          e.preventDefault();
        
          // Check if the user has already written a review for the specific coffeeChild
          const userReview = coffeeChild.reviews.find(review => review.user_id === user.id);
        
          if (!userReview) {
            // User has not written a review yet, so create a new review
            fetch(`/reviews`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                comment: comment,
                username: username,
                user_id: user.id,
                coffee_id: coffeeChild.id,
              }),
            }).then((r) => {
              if (r.ok) {
                r.json().then((newReview) => onAddReview(newReview));
              } else {
                r.json().then(errorData => {
                  setErrors(errorData.error);
                  alert(errorData.error);
                });
              }
            });
          } else {
            // User has already written a review, so update the existing review
            fetch(`/reviews/${userReview.id}`, {
              method: "PATCH",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                comment: comment,
                username: username,
                user_id: user.id,
                coffee_id: coffeeChild.id,
              }),
            }).then((r) => {
              if (r.ok) {
                r.json().then((updatedReview) => onUpdateReview(updatedReview));
              } else {
                r.json().then(errorData => {
                  setErrors(errorData.error);
                  alert(errorData.error);
                });
              }
            });
          }
        }
        
  
        
       
         
        function onAddReview(newReview) {
          // Add the new review to the coffee's reviews array
          const updatedCoffee = {
            ...coffeeChild,
            reviews: [...coffeeChild.reviews, newReview]
          };
        
          // Update the coffee list state with the updated coffee
          const updatedCoffeeList = coffee.map(coffeeItem => {
            if (coffeeItem.id === updatedCoffee.id) {
              return updatedCoffee;
            }
            return coffeeItem;
          });
        
          setCoffee(updatedCoffeeList);
        }
        
        function onUpdateReview(updatedReview) {
          // Find the coffee that contains the updated review
          const updatedCoffeeList = coffee.map(coffeeItem => {
            if (coffeeItem.reviews.some(review => review.id === updatedReview.id)) {
              // Update the specific review in the coffee's reviews array
              const updatedReviews = coffeeItem.reviews.map(review => {
                if (review.id === updatedReview.id) {
                  return updatedReview;
                }
                return review;
              });
        
              // Return the coffee with the updated reviews
              return {
                ...coffeeItem,
                reviews: updatedReviews
              };
            }
        
            return coffeeItem;
          });
        
          setCoffee(updatedCoffeeList);
        }
        

      

     


    return(
      <div>
      <h2>{coffeeChild.name}</h2>
        <button onClick={()=>handleDeleteCoffee(coffeeChild.id)}>remove your coffee</button>
      <p>Origin: {coffeeChild.origin}</p>
      <p>Notes: {coffeeChild.notes}</p>

      
        <div>
       
              <div>
                
              <form onSubmit={(e) =>handleAddReview(e)}>
                <label htmlFor="comments">What are your thoughts?</label>
                  <input
                    type="text"
                    id="comments"
                    autoComplete="off"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                  />
                  <button type="submit">Submit</button>
                 
                  </form>
              </div>
          
          <h3>What others are saying:</h3>
          {coffeeChild.reviews !== undefined ? (
            coffeeChild.reviews.map(review => (
              <div key={review.id}>
                <h4>{review.username} wrote:</h4>
                <p>Comment: {review.comment}</p>
                {console.log(coffeeChild.reviews.user_id)}
                {user.id === review.user_id ? (
                    <div>
                      <button onClick={() => handleDeleteReview(review.id)}>Remove</button>
                    </div>
                  ) : null}
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