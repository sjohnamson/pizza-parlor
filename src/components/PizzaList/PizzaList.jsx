import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function PizzaList() {

    const [pizzaList, setPizzaList] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => { fetchPizzas() }, []);

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
                    <button onClick={()=>dispatch({type: 'ADD_PIZZA', payload: {pizza}})}>Add to Cart</button> <button onClick={()=>dispatch({type: 'REMOVE_PIZZA', payload: {pizza}})}>Remove from Cart</button>
                </>
            )}

            <div>
                <button>Next ➡️</button>
            </div>
        </div>

                
    )
}

export default PizzaList;