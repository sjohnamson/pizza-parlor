import { useState, useEffect } from 'react';
import axios from 'axios';

function PizzaList() {

    const [pizzaList, setPizzaList] = useState([])

    useEffect(() => { fetchPizzas() }, [])

    const fetchPizzas = () => {
        axios.get('/api/pizza')
            .then(response => {
                setPizzaList(response.data)
            }).catch((error) => {
                console.log('fetch failed:', error);
            })
    }

    return (

        <div>
            {pizzaList.map((pizza, index) => 
                <>
                    <p key={index}>{pizza.name},{pizza.description}, {pizza.price}</p>
                    <button>Add to Cart</button> <button>Remove from Cart</button>
                </>
            )}
        </div>

    )
}

export default PizzaList;