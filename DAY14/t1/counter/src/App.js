import { useState } from "react";
import './index.css';

function App() {

  const [count, setCount] = useState(0);
  

  
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="text-8xl font-bold mb-8">{count}</div>
        <div className="space-x-6">
          
          <button onClick={increase} className="px-10 py-6 rounded-lg bg-green-600 transition">
            Increase
          </button>
        
          <button onClick={decrease} className="px-10 py-6 rounded-lg bg-red-600 transition">
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
