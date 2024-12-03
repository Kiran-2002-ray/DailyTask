import React from "react";

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello from Parent!",
    };
  }

  changeMessage = () => {
    this.setState({ message: "Message Updated!" });
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <button onClick={this.changeMessage}>Update Message</button>
        <ChildComponent message={this.state.message} />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessage: "",
    };
    console.log("Constructor: Child component initialized");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps: Syncing props to state");
    if (nextProps.message !== prevState.displayMessage) {
      return { displayMessage: nextProps.message };
    }
    return null; 
  }

  componentDidMount() {
    console.log("componentDidMount: Child component mounted");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Check if re-render needed");
    return nextProps.message !== this.props.message;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Child component updated");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Child component unmounting");
  }

  render() {
    console.log("Render: Child component rendering");
    return (
      <div>
        <h2>Child Component</h2>
        <p>{this.state.displayMessage}</p>
      </div>
    );
  }
}

export default ParentComponent;