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
                <input type="text" className='form-input' placeholder="Name" id="order-name" 
                onClick={(e) => e.stopPropagation()}
                />
                <input type="text" className='form-input' placeholder="Address" id="order-address" 
                onClick={(e) => e.stopPropagation()}
                />
                <input type="text" className='form-input' placeholder="Items" id="order-items"
                onClick={(e) => e.stopPropagation()}
                />
                <button
                className='form-button'
                onClick={(e) => handleComplete(e)}
                >{complete ? "Complete" : "Incomplete"}</button>
                <button type="submit"
                className='form-button'
                id='form-submit'
                onClick={(e) => handleSubmit(e)}
                >Submit</button>
            </div>
        </form>
     );
}
 