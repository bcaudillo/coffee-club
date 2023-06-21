import { useContext, useEffect } from "react";
import { CoffeeContext } from "./Context/coffee";


function MyContributions(){
    // function onDeleteReview(index){
    //     function handleDeleteReview(reviewToDelete) {
    //       const updatedReviews = coffee.reviews.filter((review) => review.id !== reviewToDelete.id);
    //       setComment(updatedReviews);
    //     }
         
    //   }
    
    //   function handleDeleteReview(reviewId){    
    //     fetch(`/reviews/${reviewId}`,{
    //       method: "DELETE"
    //     })
    //     .then(r=>r.json())
    //     .then((review)=>console.log(review))
    //   }
    const {contributions,setContributions, user, coffee} = useContext(CoffeeContext)
    const loadUserData=()=>{
        fetch(`/users/${user.id}`)
        .then(r => r.json())
        .then((contributions) =>console.log(contributions))

    }
    useEffect(()=>{

        loadUserData()
        
    },[])
    // console.log(contributions)  

    return(
        <div>
            <h2>Your coffee contributions: </h2>
            {contributions.coffee.map(cont =>(
                <div key = {cont.id}>
                    <h4>{cont.name}</h4>
                    <p>{cont.notes}</p>
                    <p>{cont.origin}</p>
                </div>
            ))}
   
            <h2>Your reviews: </h2>
            {contributions.review.map(cont =>(
                <div key = {cont.id}>
                <p>{cont.comment}</p>
                </div>
            ))}
        </div>
                
    )
}

export default MyContributions;