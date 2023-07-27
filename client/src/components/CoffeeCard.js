import React, { useState, useContext } from 'react';
import { CoffeeContext } from './Context/coffee';

function  CoffeeCard ({coffeeChild}){
  const {user, setCoffee, coffee} = useContext(CoffeeContext)
  const [comment, setComment] = useState("") 
  const [errors, setErrors] = useState([])
  const [editedComment, setEditedComment] = useState("");

  const isUser = user.id === coffeeChild.user_id

  

        function onDeleteReview(reviewId) {
          
          const updatedReviews = coffeeChild.reviews.filter((review) => review.id !== reviewId);
          const updatedCoffee = {
            ...coffeeChild, 
            reviews: updatedReviews
          }
          const updatedCoffeeList = coffee.map((coffeeItem)=>{
            if(coffeeItem.id === updatedCoffee.id){
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
        
        function handleDeleteCoffee(coffeeToDelete) {
          fetch(`/coffees/${coffeeToDelete}`, {
            method: "DELETE"
          })
          .then((r) => {
            if (r.ok) {
              onDeleteCoffee(coffeeToDelete);
            } else {
              r.json().then((errorData) => setErrors(errorData.errors));
              console.log(errors);
            }
          });
        }
        function onDeleteCoffee(coffeeToDelete){
          console.log(coffeeToDelete)
          const updatedCoffees = coffee.filter((coffee)=> coffeeToDelete !== coffee.id);
          setCoffee(updatedCoffees)
        }
    

        function handleAddReview(e) {
          e.preventDefault();
        
          const userReview = coffeeChild.reviews.find(review => review.user_id === user.id);
        
          if (!userReview) {
            fetch(`/reviews`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  comment: comment,
                  coffee_id: coffeeChild.id
              }),
            }).then((r) => {
              if (r.ok) {
                r.json().then((newReview) => onAddReview(newReview));
              } else {
                r.json().then(errorData => {
                  console.log(errorData)
                  setErrors(errorData.errors);
                  alert(errorData.errors)
                });
              }
            });
          } else {

            fetch(`/reviews/${userReview.id}`, {
              method: "PATCH",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                comment: comment,
                coffee_id: coffeeChild.id
              }),
            }).then((r) => {
              if (r.ok) {
                r.json().then((updatedReview) => onUpdateReview(updatedReview));
              } else {
                r.json().then(errorData => {
                  console.log(errorData)
                  setErrors(errorData.errors);
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
          const updatedCoffeeList = coffee.map(coffeeItem => {
            if (coffeeItem.reviews.some(review => review.id === updatedReview.id)) {
              const updatedReviews = coffeeItem.reviews.map(review => {
                if (review.id === updatedReview.id) {
                  return updatedReview;
                }
                return review;
              });
        
              return {
                ...coffeeItem,
                reviews: updatedReviews
              };
            }
        
            return coffeeItem;
          });
          
          setCoffee(updatedCoffeeList);
        }

        function handleEditClick(reviewId){
          console.log(reviewId)
          console.log(user.id)
          const userReview = coffeeChild.reviews.find(review => review.user_id === user.id);
          console.log(userReview)
          setComment(userReview.comment);
        }
       
       
    return(
      <div>
      <h2 style = {{color:' #556B2F'}}>{coffeeChild.name}  ☕️</h2>  
      {isUser ? <h4 style = {{color: '#B7410E'}}>id: {coffeeChild.id} </h4> : null}

    
        {isUser ? <button onClick={()=>handleDeleteCoffee(coffeeChild.id)}>remove your coffee</button>:
        null}
         <h4 style = {{color: 'brown'}}>Coffee Details</h4>
          <ul>
            <li>Origin: {coffeeChild.origin}</li>
            <li>Notes: {coffeeChild.notes}</li>
          </ul>

      
        <div>
       
              <div style = {{color: '#D4AF37'}}>
                
              <form onSubmit={(e) =>handleAddReview(e)}>
                <label htmlFor="comments">What are your thoughts?</label>
                  <input
                    type="text"
                    id="comments"
                    autoComplete="off"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                  />
                   {errors.length > 0 && (
                    <ul style={{ color: "red" }}>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                  ))}
              </ul>
            )}
                  <button type="submit">Submit</button>
                 
                  </form>
              </div>
          <h3>What others are saying:</h3>
          {coffeeChild.reviews.length > 0 ? (
            coffeeChild.reviews.map(review => (
              <div key={review.id}>
                <h4>{'😀'} {review.username}  wrote:</h4>
                <p>Comment: {review.comment}</p>
                {user.id === review.user_id ? (
                    <div> 
                      <button onClick={() => handleDeleteReview(review.id)}>Remove</button>
                      
                      <button onClick = {()=>handleEditClick(review.id)}>Edit</button>
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