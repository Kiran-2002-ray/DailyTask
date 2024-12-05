import React, { useState } from 'react';

function ParentComponent() {
  const [message, setMessage] = useState("");

  // Callback function to update the parent's state
  const handleChildData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {message}</p> {/* Displaying data from the child */}
      <ChildComponent sendDataToParent={handleChildData} />
    </div>
  );
}

function ChildComponent(props) {
  const sendData = () => {
    const text = "Hello from Child";
    props.sendDataToParent(text); // Sending data to the parent
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
}

export { ParentComponent, ChildComponent };
