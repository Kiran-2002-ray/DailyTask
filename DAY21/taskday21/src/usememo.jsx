import React, { useState, useMemo } from 'react';

const slowFunction = (num) => {
  console.log("Running slow function...");
  for (let i = 0; i < 1000000000; i++) {} // Simulating a slow computation
  return num * 2;
};

const App1 = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const memoizedResult = useMemo(() => slowFunction(count), [count]);

  return (
    <div>
      <h1>Result: {memoizedResult}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>Change Other State</button>
    </div>
  );
};

export default App1;
