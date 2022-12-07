import { Orders } from './components/Orders';
import { OrderForm } from './components/OrderForm';
import { useState } from 'react';
import './App.css'

function App() {
  const [state, useState] = useState({
    completeOrders: { 1: {id: 1, name: "Wilson", address: "NYC", items: "Pizza"}, isComplete: true},
    incompleteOrders: {2: {id: 2, name: "Mark", address: "Brookyln", items: "Pepsi"}, isComplete: false}
  });

  return (
    <div className="App">
      <OrderForm orders={Object.values(state.incompleteOrders)}/>
    </div>
  )
}

export default App
