import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    
      <div>
      {/* Content Section */}
      <div className="flex-grow flex items-center justify-center bg-gray-100 text-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">Welcome to the landing page!</h1>
          <button 
            onClick={handleLoginClick} 
            className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
