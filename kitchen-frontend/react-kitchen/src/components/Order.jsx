import React from 'react';
import { useState } from 'react';


export const Order = ({order, state, setState}) => {

    const handleClick = (e) => {
        e.preventDefault();
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
            <span>{order.name}</span>
            <span>{order.address}</span>
            <span>{order.items}</span>
            <button
            onClick={(e) => handleClick(e)}
            >{order.isComplete ? "Complete" : "Incomplete"}</button>
        </div>
     );
}
 