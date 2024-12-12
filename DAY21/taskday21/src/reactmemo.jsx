import React, { useState } from 'react';

// Child component optimized with React.memo to prevent unnecessary re-renders
const Child = React.memo(({ count }) => {
  console.log("Child component rendered");
  return <div>Child Count: {count}</div>;
});

const Parent = () => {
    // State for count
    const [count, setCount] = useState(0);
    
    // State for other unrelated functionality (demonstrates React.memo)
    const [otherState, setOtherState] = useState(0);
    
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h3>React.memo Demonstration</h3>

    
      <button 
        style={{ margin: "10px", padding: "10px", backgroundColor: "blue", border: "none", cursor: "pointer" }}
        onClick={() => setCount(count + 1)}
        >
        Increment Count
      </button>
      <button 
        style={{ margin: "10px", padding: "10px", backgroundColor: "green", border: "none", cursor: "pointer" }}
        onClick={() => setOtherState(otherState + 1)}
        >
        Change Other State
      </button>

      {/* Render Child component */}
      <Child count={count} />

      {/* Display current states */}
      <div style={{ marginTop: "20px" }}>
        <p><strong>Other State:</strong> {otherState}</p>
      </div>
    </div>
  );
};

export default Parent;
