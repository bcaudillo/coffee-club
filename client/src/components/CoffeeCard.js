import React, { useState, useContext } from 'react';
import { CoffeeContext } from './Context/coffee';

function  CoffeeCard ({key, coffee}){
  const {username, setUsername, setUser} = useContext(CoffeeContext)
  const [isTrue, setIsTrue] = useState(false)
  const [comment, setComment] = useState("")
  
 

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/reviews/${coffee.id}}`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: 'a',
        comment: 'a',
        coffee_id: 'a'
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((comment) => setComment(comment));
      }
    });
  }
  function handleClick(){ 
    console.log('you got to me')
  }

  


    return(
      <div>
      <h2>{coffee.name}</h2>
      <p>Origin: {coffee.origin}</p>
      <p>Notes: {coffee.notes}</p>
{/* 
      {coffee.reviews.length > 0 && ( */}
      
        <div>
          {isTrue?(<button onClick = {handleSubmit}>click me</button>):(<button onClick={()=>setIsTrue(true)}>Leave a comment</button>
)}
            {isTrue ? (
              <div>
                
                <form >
                <label htmlFor="comments">Comments:</label>
                  <input
                    type="text"
                    id="comments"
                    autoComplete="off"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  /></form>
              </div>
            ) : (
              <p>leave a comment</p>
            )}

          <h3>What others are saying:</h3>
          {coffee.reviews.map(review => (
            <div key={review.id}>
              <h4>{review.username} wrote:</h4>
              <p>Comment: {review.comment}</p>
        

            </div>
          ))}
        </div>
      {/* )} */}
    </div>
  );
};



export default CoffeeCard