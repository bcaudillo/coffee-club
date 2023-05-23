import React,{useContext} from 'react';
import CoffeeCard from './CoffeeCard';
import { CoffeeContext } from './Context/coffee';

function CoffeeList(){
    const {coffee} = useContext(CoffeeContext)
    console.log(coffee)
    const coffeeCards = coffee.map(coffee => <CoffeeCard key ={coffee.id} coffee = {coffee}/>)
    
    return (
        <div>
            <h1>Coffee List:</h1>
            {coffeeCards}
        </div>
    )
}

export default CoffeeList;