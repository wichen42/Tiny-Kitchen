import React from 'react';
import { Order } from './Order.jsx';

const Orders = ({orders, state, setState}) => {
    const ordersList = orders.map(order => {return <Order order={order} key={order.id} state={state} setState={setState}/>});

    return (
        <div className="orders-list">
            {ordersList}
        </div>
    );
};

export default Orders;

