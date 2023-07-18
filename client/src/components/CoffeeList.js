import React,{useContext} from 'react';
import CoffeeCard from './CoffeeCard';
import { CoffeeContext } from './Context/coffee';
import EditCoffee from './EditCoffee';

function CoffeeList(){
    const {coffee} = useContext(CoffeeContext)
    console.log(coffee)
    const coffeeCards = coffee.map(coffee => 
        <div>
            <CoffeeCard key ={coffee.id} coffeeChild = {coffee}/>
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