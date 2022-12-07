import React from 'react';
import { Order } from './Order.jsx';

const Orders = ({orders}) => {
    console.log(orders);
    const ordersList = orders.map(order => {return <Order order={order} key={order.id} />});

    return (
        <ul className="orders-list">
            {ordersList}
        </ul>
    );
};

export default Orders;

