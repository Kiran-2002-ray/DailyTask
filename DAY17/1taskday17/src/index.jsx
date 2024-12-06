import React from 'react'
import { useRef } from 'react'
import './App.css'

const UncontroledComponent = () =>{
const inputRef = useRef(null);


const handleSubmit = () => {
    event.preventDefault();
    alert(`Submitted value using useRef ${inputRef.current.value}`)
}

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="task">Task : </label>
                <input type="text" name="task" id="task" placeholder='enter task' ref={inputRef} />

                <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
    )
}



export default UncontroledComponent 