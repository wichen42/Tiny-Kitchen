import React from 'react';
import { useState } from 'react';


export const Order = ({order, state, setState, style}) => {

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (order.isComplete) {
            const updatedOrder = {
                id: order.id, 
                name: order.name, 
                address: order.address, 
                items: order.items,
                isComplete: false,
            }
            const newState = {...state};
            newState.incompleteOrders[order.id] = updatedOrder;
            delete newState.completeOrders[order.id];
            setState(newState);
        } else {
            const updatedOrder = {
                id: order.id, 
                name: order.name, 
                address: order.address, 
                items: order.items,
                isComplete: true,
            }
            const newState = {...state};
            newState.completeOrders[order.id] = updatedOrder;
            delete newState.incompleteOrders[order.id];
            setState(newState);
        }

    }

    return ( 
        <div className='order'>
            <div className='order-details'>
                <span>Name: {order.name}</span>
                <span>Address: {order.address}</span>
                <span>Items: {order.items}</span>
            </div>
            <button
            className='order-button'
            onClick={(e) => handleClick(e)}
            style={order.isComplete ? style : {}}
            >{order.isComplete ? "Complete" : "Incomplete"}</button>
        </div>
     );
}
 