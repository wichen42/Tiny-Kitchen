import React from 'react';


export const Order = ({order}) => {

    return ( 
        <li className='order'>
            <span>{order.name}</span>
            <span>{order.address}</span>
            <span>{order.items}</span>
            <span>Complete: {order.isComplete}</span>
        </li>
     );
}
 