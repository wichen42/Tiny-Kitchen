import { useState } from 'react';
import baby_chef from '../assets/baby-chef.jpg';

export const OrderForm = () => {

    const [complete, setComplete] = useState(false)

    const handleComplete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setComplete(!complete);
    }

    const handleSubmit = (e) => {
        
    }

    return ( 
        <form className="order-form">
            <div className="order-form-header">
                <h2>Create Order</h2>
                <img src={baby_chef} alt="baby-chef" className='picture'/>
            </div>
            <div className='form-body'>
                <input type="text" placeholder="Name" id="order-name"/>
                <input type="text" placeholder="Address" id="order-address" />
                <input type="text" placeholder="Items" id="order-items"/>
                <button
                onClick={(e) => handleComplete(e)}
                >{complete ? "Complete" : "Incomplete"}</button>
                <button type="submit"
                onClick={(e) => handleSubmit(e)}
                >Submit</button>
            </div>
        </form>
     );
}
 