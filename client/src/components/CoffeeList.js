import React,{useContext,useState} from 'react';
import CoffeeCard from './CoffeeCard';
import { CoffeeContext } from './Context/coffee';
import EditCoffee from './EditCoffee';


function CoffeeList(){
    const {coffee, user} = useContext(CoffeeContext)
    const [userComponent, setUserComponent]= useState(false)
    console.log(coffee)
    const coffeeCards = coffee.map(coffee => 
        <div key = {coffee.id}>
            <CoffeeCard coffeeChild = {coffee}/>
            <hr />
        </div>
        )

       
    return (
        <div>
            <h1>Coffee List:</h1>
            {coffeeCards}
        </div>
    )
}

export default CoffeeList;