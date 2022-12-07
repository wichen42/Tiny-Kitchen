import React from 'react';
import { Order } from './Order.jsx';

export const Orders = orders => {
    const ordersList = orders.map(order => {<Order order={order} key={order.id} />});

    return (
        <ul className="orders-list">
            {ordersList}
        </ul>
    );
};


/* 
class Orders extends React.Component {
    constructor(props) {
        super(props);
    }
} */