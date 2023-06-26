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

function handleEditReview(reviewId, e) {
  e.preventDefault();
  console.log(reviewId);
  console.log(comment);

  fetch(`/reviews/${reviewId}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      comment: comment,
      username: username,
      user_id: user.id,
      coffee_id: coffeeChild.id
    })
  })
    .then(r => {
      if (r.ok) {
        r.json().then(comment => onEditReview(comment.id));
      } else {
        r.json().then(errorData => {
          setErrors(errorData.error);
          alert(errorData.error);
        });
      }
    });
}

function handleAddReview(e) {
  e.preventDefault();

  // Check if a review already exists for the current user and coffee
  const existingReview = coffeeChild.reviews.find(review => review.user_id === user.id);

  if (existingReview) {
    fetch(`/reviews/${existingReview.id}`, {
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
        r.json().then((comment) => onEditReview(comment));
      } else {
        r.json().then(errorData => {
          setErrors(errorData.error);
          alert(errorData.error);
        });
      }
    });
  } else {
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
        r.json().then((comment) => onAddReview(comment));
      } else {
        r.json().then(errorData => {
          setErrors(errorData.error);
          alert(errorData.error);
        });
      }
    });
  }
}

       
         
        function onAddReview(newComment){
          console.log(newComment)
          const updatedReviews = coffeeChild.reviews.filter((review) => review.id !== newComment.id);
          console.log(updatedReviews)
          const updatedCoffee = {
            ...coffeeChild, 
            reviews: [...updatedReviews, newComment]
          }
          const updatedCoffeeList = coffee.map((coffeeItem)=>{
            if(coffeeItem.id === updatedCoffee.id){
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