import React,{useContext} from 'react';
import CoffeeCard from './CoffeeCard';
import { CoffeeContext } from './Context/coffee';


function CoffeeList(){
    const {coffee} = useContext(CoffeeContext)
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