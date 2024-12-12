import React, { useState, useCallback } from 'react';

const Child = React.memo(({ handleClick }) => {
  console.log("Child component rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

const App2 = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setOtherState(otherState + 1)}>Change Other State</button>
      <Child handleClick={incrementCount} />
    </div>
  );
};

export default App2;
