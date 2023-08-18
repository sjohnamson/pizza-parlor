// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'

function CheckoutPage() {

    const customer = useSelector(store => store.currentCustomer)
    const cart = useSelector(store => store.cart)
    const cartTotal = useSelector(store => store.cartTotal)


    console.log('in checkout customerDATA', customer)
    console.log('in checkout customerNAMEDATA', customer.name)


    const dispatch = useDispatch();

    let newOrder = {
        customer_name: customer.name,
        street_address: customer.street_address,
        city: customer.city,
        zip: customer.zip,
        type: customer.type,
        total: cartTotal,
        pizzas: cart[0].id
    }
    console.log('in checkout', newOrder)

    const handleCheckout = () => {
        axios.post('/api/orders', newOrder)
            .then(response => {
                dispatch({ type: 'CLEAR_ORDER' })
            }).catch((error) => {
                console.log('put failed:', error);
            })
    }

    return (
        <>
            <h1>Checkout</h1>
            <hr />
            <div>
                <h2>Customer Info</h2>
                <p>{customer.customer_name}</p>
                <p>{customer.street_address}</p>
                <p>{customer.city},{customer.state} {customer.zip}</p>
            </div>

            <div><h2>For {customer.type}</h2></div>

            <table>
                <thead>
                    <tr>
                        <th>Pizza Type</th><th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((pizza, index) =>
                        <tr key={index}>
                            <td>
                                {pizza.name}
                            </td>
                            <td>
                                {pizza.price}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                <h2>Total: {customer.total}</h2>
            </div>
            <Link to="/">
                <h3><button onClick={() => handleCheckout()}>CHECKOUT</button></h3>
            </Link>

        </>
    );

}

export default CheckoutPage;