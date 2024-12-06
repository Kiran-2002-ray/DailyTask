import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = () => {
    event.preventDefault();
    alert(`Successfully submitted  value is ${name} using useState`)

  }

  return (
    <>
     <div>
      <form  onSubmit={handleSubmit} action="">
        <label htmlFor="name">Name:  </label>
        <input type="text" placeholder ='enter your name' value={name} onChange={handleChange}  />
        
        <button type='submit' className='btn' >Submit</button>
      </form>
     </div>
    </>
  )
}

export default App
