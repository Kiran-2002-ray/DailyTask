import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const openGoogle = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h1 className="text-3xl font-bold">Welcome to the Home Page!</h1>
        <button 
          onClick={openGoogle} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go to Google
        </button>
      </div>
    </div>
  );
}
