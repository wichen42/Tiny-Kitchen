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
    <div className="App"
    style={Object.values(state.incompleteOrders).length === 0 ? {background: "black", color:"white"} : {}}
    >
      <span>Incomplete Orders:</span>
      <IncompleteOrders orders={Object.values(state.incompleteOrders)} state={state} setState={setState}/>
      <span>Complete Orders:</span>
      <CompleteOrders orders={Object.values(state.completeOrders)} state={state} setState={setState}/>
      <OrderForm />
    </div>
  )
}

export default App
