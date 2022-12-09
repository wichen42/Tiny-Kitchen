export const RECIEVE_ORDERS = 'orders/RECIEVE_ORDERS';
export const DELETE_ORDER = 'order/DELETE_ORDER';
export const UPDATE_ORDERS = 'orders/UPDATE_ORDERS';

export const recieveOrders  = (orders) => ({
    type: RECIEVE_ORDERS,
    orders
});

export const removeOrder = (orderId) => ({
    type: DELETE_ORDER,
    orderId
});

export const updateOrders = (order) => ({
    type: UPDATE_ORDERS,
    order
});

export const getOrders = ({orders}) => orders ? Object.values(orders) : [];

export const fetchOrders = async dispatch => {
    const res = await fetch("/api/orders/");
    const data = await res.json();
    dispatch(recieveOrders(data));
};

export const addOrder = (order) => async dispatch => {
    try {
        const res = await fetch("/api/orders", {
            method: 'post',
            body: JSON.stringify(order),
            headers: 'application/json'
        });
        const data = await res.json();
        dispatch(updateOrders(data));
    } catch(err) {
        const res = await err.json();
        console.log(res);
    }
};

export const updateOrder = (order) => async dispatch => {
    const res = await fetch(`/api/orders/${order.id}`, {
        method: 'patch',
        body: order,
        headers: 'application/json'
    });
    dispatch(fetchOrders);
}

export const deleteOrder = (orderId) => async dispatch => {
    const res = await fetch(`/api/orders/${orderId}`, {
        method: 'delete',
        header: 'application/json'
    });
    const data = await res.json();
    dispatch(removeOrder(data));
};

const ordersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = {...state};

    switch(action.type) {
        case RECIEVE_ORDERS:
            return {...newState, ...action.orders}
        case UPDATE_ORDERS:
            newState[action.order.id] = action.order;
            return newState;
        case DELETE_ORDER:
            delete newState[action.orderId];
            return newState;
        default: 
            return state;
    }
}

export default ordersReducer;


