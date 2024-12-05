import React from "react";
import { useState } from "react";
import './App.css'

function ParentComponent() {
  const [count, setCount] = useState(0); // State for count
  const parentData = "Hello from Parent!"; // Data to pass to the child

  // Function to handle increment
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      {/* Passing data and function as props */}
      <ChildComponent data={parentData} increment={incrementCount} />
    </div>
  );
}

function ChildComponent({ data, increment }) {
  return (
    <div>
      <h2>Child Component</h2>
      {/* Using data passed from parent */}
      <p>Message from Parent: {data}</p>
      {/* Calling parent's function */}
      <button onClick={increment}>Increment Count in Parent</button>
    </div>
  );
}
 export default ParentComponent