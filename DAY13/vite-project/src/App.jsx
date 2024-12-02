import { useState } from 'react';
import './App.css';

function App() {
  const [name, setname] = useState("unknown");
  const login = "log in";

  const handleclick = () => {
    alert(`Successful ${login}`);
    setname("kiran");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">
          Hi Vite App, this is {name}
        </h2>
        <button
          onClick={handleclick}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Click me
        </button>
      </div>
    </>
  );
}

export default App;
