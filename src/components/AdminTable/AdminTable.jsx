import axios from "axios";
import { useState } from "react"


function AdminTable() {
    const [orderList, setOrderList] = useState([]);

    const getOrders = () => {
    axios
        .get('/api/orders')
        .then(response => {
            setOrderList(response.data);
        })
        .catch(error => {
            console.error('unable to retrieve order list, try again later', error)
        })
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Customer Name
                    </th>
                    <th>
                        Time Order Placed
                    </th>
                    <th>
                        Type
                    </th>
                    <th>
                        Cost
                    </th>
                </tr>
            </thead>
            <tbody>
                {orderList?.map((order, i) => 
                    <tr key={i}>
                        <td>{order.customer_name}</td>
                        <td>{order.time}</td>
                        <td>{order.type}</td>
                        <td>{order.total}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default AdminTable