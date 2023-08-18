import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link} from 'react-router-dom'

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

    const addPizza = (pizza) => {
        console.log('addpizza: ', pizza.price )
        dispatch({ type: 'ADD_COST', payload: pizza.price });
        dispatch({ type: 'ADD_PIZZA', payload: pizza })
    }

    const removePizza = (pizza) => {
        
        dispatch({ type: 'REMOVE_COST', payload: pizza.price });
        dispatch({ type: 'REMOVE_PIZZA', payload: pizza })
    }

    return (
        <>
            <h1>Select Your Pizzas!</h1>
            <hr />

                <div>
                    {pizzaList.map((pizza, index) =>
                        <>
                            <p key={index}>{pizza.name},{pizza.description}, {pizza.price}</p>
                            <button onClick={() => addPizza(pizza)} >
                                Add to Cart
                            </button>
                            <button onClick={() => removePizza(pizza)}>Remove from Cart</button>
                        </>
                    )}

                    <Link to="customerform"><h3><button>Next ➡️</button></h3></Link>

            </div>
        </>

    )
}

export default PizzaList;