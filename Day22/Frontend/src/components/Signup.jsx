import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // 'success' or 'error'
  const navigate = useNavigate(); // For navigation to login page after success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      
      // On success
      setAlertType('success');
      setAlertMessage(response.data.message);
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      // On error
      setAlertType('error');
      setAlertMessage(error.response ? error.response.data.message : 'Signup failed');
    }
  };

  return (
    <div
    >

      <h1>Signup</h1>
      
      {/* Displaying alert message */}
      {alertMessage && (
        <ul>
          <li style={{ color: alertType === 'success' ? 'green' : 'red' }}>
            {alertMessage}
          </li>
        </ul>
      )}

      {/* Signup form */}
      <form onSubmit={handleSubmit} className="signup-form">
        <div>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div><br />
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div><br />
        <div>
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div><br />
        <div>
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;



























// import React, { useState } from 'react';
// import { signupUser } from '../api/userApi';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     address: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await signupUser(formData);
//       alert(result.message);
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto', }}>
//       <h2>Signup Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name:  </label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         <br />   <br />
//         <label>Email:  </label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         <br />   <br />
//         <label>Password:  </label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//         <br />   <br />
//         <label>Phone:  </label>
//         <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
//         <br />   <br />
//         <label>Address:  </label>
//         <textarea name="address" value={formData.address} onChange={handleChange} required />
//         <br />  <br />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
