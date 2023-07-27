import { useState, useEffect,useContext } from 'react';
import { CoffeeContext } from './Context/coffee';


function MyReviews(){
    const [myReviews, setMyReviews] = useState([])
    const {user, setCoffee, coffee} = useContext(CoffeeContext)


    useEffect(()=>{
        fetch('/coffees/reviews')
            .then(r=>r.json())
            .then(backendReviews =>setMyReviews(backendReviews)) 
    },[]);


    return (
        <div>
            <h1>My Reviews:</h1>
          {myReviews.map((coffeeReview) => (
            <div key={coffeeReview.id}>
            {console.log(coffeeReview)}
            {coffee.map((coffeeItem) => coffeeItem.id === coffeeReview.coffee_id && (
                 <h2 style={{ color: '#556B2F' }}>{coffeeItem.name} ☕️</h2>
            ))}
         
              
              <ul>
               
                <li>Comment: {coffeeReview.comment}</li>
              </ul>
            </div>
          ))}
        </div>
      );
      
}

export default MyReviews;