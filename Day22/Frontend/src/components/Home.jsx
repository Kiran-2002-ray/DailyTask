// import React from "react";
// import { useNavigate } from "react-router-dom";
// import '../App.css'

// const Home = () => {
//     const navigate = useNavigate(); // Initialize the navigate function

//   const goToSignup = () => {
//     navigate("/signup"); // Navigate to /signup programmatically
//   };
//   return (
//     <div>
//       <h1>Welcome to the App!</h1>
//       <p>Please sign up or log in to continue.</p>

//       {/* Link to the Signup page */}
//       <Link to="/signup">Go to Signup</Link>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import '../App.css'

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const goToSignup = () => {
    navigate("/signup"); // Navigate to /signup programmatically
  };

  return (
    <div>
      <h1>Welcome to the App!</h1>
      <p>Please sign up or log in to continue.</p>
      
      {/* Button to navigate to Signup page */}
      <button onClick={goToSignup}>Go to Signup</button>
    </div>
  );
};

export default Home;
