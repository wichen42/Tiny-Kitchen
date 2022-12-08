import React from 'react';


export const Order = ({order}) => {
    const handleClick = () => {
        console.log(order);
    }

    return ( 
        <li className='order'>
            <span>{order.name}</span>
            <span>{order.address}</span>
            <span>{order.items}</span>
            <button
            onClick={handleClick}
            >{order.isComplete ? "Complete" : "Incomplete"}</button>
        </li>
     );
}
 