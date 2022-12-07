import CompleteOrders from './components/Orders';
import IncompleteOrders from './components/Orders';
import { OrderForm } from './components/OrderForm';
import { useState } from 'react';
import './App.css'

function App() {
  const [state, setState] = useState({
    completeOrders: {
      1: {
        id: 1, 
        name: "Wilson", 
        address: "NYC", 
        items: "Pizza", 
        isComplete: true
      },
    },
    incompleteOrders: {
      2: {
        id: 2, 
        name: "Mark", 
        address: "Brookyln", 
        items: "Pepsi", 
        isComplete: false
      },
    },
  });

  return (
    <div className="App">
      <span>Incomplete Orders:</span>
      <IncompleteOrders orders={Object.values(state.incompleteOrders)}/>
      <span>Complete Orders:</span>
      <CompleteOrders orders={Object.values(state.completeOrders)}/>
      <OrderForm />
    </div>
  )
}

export default App
