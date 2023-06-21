import React, { useState, useContext } from 'react';
import { CoffeeContext } from './Context/coffee';

function  CoffeeCard ({key, coffeeChild}){
  const {username,user, setCoffee, coffee} = useContext(CoffeeContext)
  const [comment, setComment] = useState("") 

        function onDeleteReview(reviewId) {
          //need to update list and item lit belongs to
          //create a new array of reviews that don't have this id
          const updatedReviews = coffeeChild.reviews.filter((review) => review.id !== reviewId);
          //Need an coffee object that has been updated
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

        //coffee state => coffeeList
         
    //   }
    function handleDeleteCoffee(coffeeToDelete){
      fetch(`/coffee/${coffeeToDelete}`,{
        method: "DELETE"
      })
      .then(deleteCoffee(coffeeToDelete))
    }
      function deleteCoffee(coffeeToDelete){
        console.log(coffeeToDelete)
        const updatedCoffees = coffee.filter((coffee)=> coffeeToDelete !== coffee.id);
        setCoffee(updatedCoffees)
      }
    ///update gameplan
    //-update coffee object coffeeChild.reviews
    
      function handleDeleteReview(reviewId){ 
        console.log(reviewId)
        fetch(`/reviews/${reviewId}`,{
          method: "DELETE"
        })
        .then(onDeleteReview(reviewId))
      }

      function handleUpdateReview(reviewId){
        fetch(`/reviews/${reviewId}`,{
          method: "UPDATE"
        })
        .then(onUpdateReview(reviewId))
      }


      function onUpdateReview(reviewId){
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

      }

      function addReview(newComment){
        setComment([...comment, newComment])
      }
  //??Why does the text display in every text box even if it's only commenting on a single coffee??
//  console.log(comment)
//  console.log(coffee)

  function handleAddReview(e) {
    console.log(coffeeChild.id)
    e.preventDefault();
    
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
        r.json().then((comment) => addReview(comment));
      } 
    });
  }

  const params = {comment, coffee_id: coffeeChild.id, username}


    return(
      <div>
      <h2>{coffeeChild.name}</h2>
        <button onClick={()=>handleDeleteCoffee(coffeeChild.id)}>remove your coffee</button>
      <p>Origin: {coffeeChild.origin}</p>
      <p>Notes: {coffeeChild.notes}</p>

{/* 
      {coffee.reviews.length > 0 && ( */}
      
        <div>
          {/* {isTrue?(<button onClick = {console.log(target.value)}>click me</button>):(<button onClick={()=>setIsTrue(true)}>Leave a comment</button>
)}
            {isTrue ? ( */}
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
            {/* ) : ( */}
            {/* )} */}

          <h3>What others are saying:</h3>
          {coffeeChild.reviews.map(review => (
            <div key={review.id}>
              <h4>{review.username} wrote:</h4>
              <p>Comment: {review.comment}</p>
              <button onClick={ () => handleDeleteReview(review.id)}>Remove</button>
              <button onClick ={ () => handleUpdateReview(review.id)}>Edit</button>
        

            </div>
          ))}
        </div>
      {/* )} */}
      
    </div>
  );
};



export default CoffeeCard