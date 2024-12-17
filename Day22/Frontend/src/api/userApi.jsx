import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'An error occurred!');
  }
};
