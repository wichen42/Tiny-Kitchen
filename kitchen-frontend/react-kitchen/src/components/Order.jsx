import React from 'react';


export const Order = ({order}) => {
    const handleClick = () => {
        
    }

    return ( 
        <li className='order'>
            <span>{order.name}</span>
            <span>{order.address}</span>
            <span>{order.items}</span>
            <button>{order.isComplete ? "Complete" : "Incomplete"}</button>
        </li>
     );
}
 