import React from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {
 const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

    return (
        <div>
            <div style={styles.container}>
                <h1>Welcome to Student's Website</h1>
                <div style={styles.buttonContainer}>
                    <button style={styles.button} onClick={() => handleNavigation('/signup')}>Go to Signup</button>
                    <button style={styles.button} onClick={() => handleNavigation('/login')}>Go to Login</button>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
      textAlign: 'center',
      marginTop: '100px',
      fontFamily: 'Arial, sans-serif',
    },
    buttonContainer: {
      marginTop: '20px',
    },
    button: {
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      margin: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };

export default Home