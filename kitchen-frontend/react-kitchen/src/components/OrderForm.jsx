
export const OrderForm = () => {
    return ( 
        <form className="order-form">
            <input type="text" placeholder="Name" id="order-name"/>
            <input type="text" placeholder="Address" id="order-address" />
            <input type="text" placeholder="Items" id="order-items"/>
            <input type="checkbox" name="isComplete" id="oder-isComplete" />
            <label htmlFor="isComplete">Is Complete?</label>
            <button type="submit">Submit</button>
        </form>
     );
}
 