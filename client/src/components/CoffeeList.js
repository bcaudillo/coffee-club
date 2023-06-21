import React,{useContext} from 'react';
import CoffeeCard from './CoffeeCard';
import { CoffeeContext } from './Context/coffee';

function CoffeeList(){
    const {coffee} = useContext(CoffeeContext)
    console.log(coffee)
    //in order to update state coffee.map needs to change 
    const coffeeCards = coffee.map(coffee => <CoffeeCard key ={coffee.id} coffeeChild = {coffee}/>)
    
    return (
        <div>
            <h1>Coffee List:</h1>
            {coffeeCards}
        </div>
    )
}

export default CoffeeList;