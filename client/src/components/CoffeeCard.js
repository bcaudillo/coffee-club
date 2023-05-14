import React from 'react';

function  CoffeeCard ({coffee,onAddToFavorites, onDeleteCoffee}){
    const params = {name: coffee.name, origin: coffee.origin, notes: coffee.notes}

    function handleAdd(){
        fetch(`/favorites`,{
            method: "POST",
            headers: {
                "Accept": "applicatoin/json",
                "Content-Type": "application/json"
              },
            body: JSON.stringify(params)
        })
        .then(r=>r.json())
        .then((favorite)=>onAddToFavorites(favorite))
    }
    function handleDelete(){
        fetch(`/coffeelist/${coffee.id}`,{
          method: "DELETE"
        })
        .then(r=>r.json())
        .then((coffee)=>onDeleteCoffee(coffee))
      }

    return(
    <div>
        <h4 key = {coffee.id}>{coffee.name}</h4>

        <ul>
            <li><b>Notes:</b> {coffee.notes}</li>
            <li><b>Origin:</b> {coffee.origin}</li>
        {/* <button onClick = {handleAdd}>Add to favorite list</button> 
        <br></br>
        <button onClick = {handleDelete}>Remove from favorite list</button> */}
        </ul>

    </div>)

}

export default CoffeeCard