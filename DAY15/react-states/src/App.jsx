import React, { useState } from 'react';
import './App.css';
import Greeting from './index';



function App() {
  const hii = <p>hiiiiii</p>

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div className="App">

      <Greeting />

      <div>{hii}</div>
      <div className="counter">
        <h2>Counter: {count}</h2>
        <button onClick={handleIncrement} className="btn btn-increment">
          Increment
        </button>
        <button onClick={handleDecrement} className="btn btn-decrement">
          Decrement
        </button>

      </div>
    </div>
  );
}

export { App };
