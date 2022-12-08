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
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    setFlipped(!flipped);
    e.currentTarget.classList.toggle('is-flipped');
  }

  return (
    <div className="App">
      <div className='card'
      onClick={(e) => handleFlip(e)}
      >
        <div className={flipped ? "card-face card-front is-flipped" : "card-face card-front"}>
          <div className='incomplete-orders'>
            <span>Incomplete Orders</span>
            <IncompleteOrders orders={Object.values(state.incompleteOrders)} state={state} setState={setState}/>
          </div>
          <div className='complete-orders'>
              <span>Complete Orders</span>
              <CompleteOrders orders={Object.values(state.completeOrders)} state={state} setState={setState}/>
          </div>
        </div>
        <div className="card-face card-back">
            <div className='card-back-form'>
                <OrderForm />
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
