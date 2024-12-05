import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  // Initialize state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,  // Counter state
      name: '',  // Name state
    };
  }

  // Increment function to update the count state
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  // Handle change for name input
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <div>
        {/* Counter Section */}
        <div>
          <h1>Counter: {this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
        </div>
        <br />
        {/* Name Input Section */}
        <div>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <p>Hello, {this.state.name}</p>
        </div>
      </div>
    );
  }
}

export default Counter;
