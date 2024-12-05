import React, { useState } from 'react';
import './App.css';

function Data() {
  const [count, setCount] = useState(0); // Counter state
  const [name, setName] = useState(""); // Input state
  const [user, setUser] = useState({ name: '', age: 0 }); // User profile state
  const [tasks, setTasks] = useState([]); // To-do task list
  const [taskInput, setTaskInput] = useState(''); // Task input field state

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const inputchangehandle = (e) => {
    setName(e.target.value);
  };

  const profilechangehandle = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  return (
    <div className="container">
      <div className="counter">
        <h1>Counter: {count}</h1>
        <div className="btn-group">
          <button onClick={increment} className="btn btn-increment">Increment</button>
          <button onClick={decrement} className="btn btn-decrement">Decrement</button>
        </div>
      </div>
      <hr />
      <div className="name-section">
        <input
          type="text"
          value={name}
          onChange={inputchangehandle}
          placeholder="Enter your name"
          className="input-field"
        />
        <p>Hello, My name is {name}</p>
      </div>
      <hr />
      <div className="profile-section">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={user.name}
          onChange={profilechangehandle}
          className="input-field"
        />
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={user.age}
          onChange={profilechangehandle}
          className="input-field"
        />
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
      </div>
      <hr />
      <div className="task-section">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task"
          className="input-field"
        />
        <button onClick={addTask} className="btn btn-add-task">Add Task</button>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Data;
