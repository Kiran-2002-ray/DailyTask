import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    <div>
      <h1>This is counter Function</h1>
      <p>Count: {count} </p>
    </div>
    <div>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={ () => setCount(count-1)}>Decrement</button>
    </div>

    
      </div>
    </>
  )
}

export default App
