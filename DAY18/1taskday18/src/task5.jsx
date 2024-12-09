import React, { useState, useMemo } from 'react';

function ExampleUseMemo() {
  const [number, setNumber] = useState(0);
  const [increment, setIncrement] = useState(0);

  const factorial = useMemo(() => {

    console.log("Calculating factorial...");

    const calcFactorial = (n) => (n <= 1 ? 1 : n * calcFactorial(n - 1));
    return calcFactorial(number);
  }, [number]); 

  return (
    <div>
      <p>Factorial of {number}: {factorial}</p>
      <input type="number" value={number}  onChange={(e) => setNumber(Number(e.target.value))} />
      <button onClick={() => setIncrement(increment + 1)}>Trigger Re-render</button>
    </div>
  );
}
 export default ExampleUseMemo;