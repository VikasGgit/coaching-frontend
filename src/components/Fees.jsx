// src/components/FeeStructure.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use React Router for navigation

const feeDetails = [
    { title: "Tuition Fee", amount: 50000 },
    { title: "Lab Fee", amount: 15000 },
    { title: "Library Fee", amount: 5000 },
    { title: "Miscellaneous Fee", amount: 8000 },
  ];


const FeeStructure = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      {/* Container */}
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Course Fee Structure</h2>
        
        {/* Fee details */}
        <div className="flex flex-col space-y-4">
          <div className='font-serif text-xl ' >
          Same as shown in the course click on below button or contact button given in the corner for accurate details
        </div>
        </div>
        {/* Navigation button */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/course')}
            className="px-6 py-2 text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Go to Course Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
