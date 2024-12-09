import React from "react";
import { useState, useEffect } from "react";
import './App.css'

function App2(){
const [count, setCount] = useState(0)

 useEffect(() => {
    // document.title = `you clicked ${count} times`
    console.log( document.title)
},[count])
    return(
        <div>
            <div>
                <p>you clicked {count} times</p>
            </div>
            <div>
                <button onClick={() => setCount(count+1) }>click me</button>
            </div>
        </div>
    )
}
export default App2;