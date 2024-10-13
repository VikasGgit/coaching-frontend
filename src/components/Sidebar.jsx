// src/components/Sidebar.js

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing the icons
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  const navigate = useNavigate();
  
  return (
    <div>
      {/* Menu button for small screens */}
      <button
        className="p-2 text-gray-700 lg:hidden" // Hide on larger screens
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`w-64 p-4 bg-gray-200 lg:block ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
        <ul className="space-y-2">
          <li className="p-2 rounded cursor-pointer hover:bg-gray-300" onClick={() => navigate('/course')}>
            Courses
          </li>
          <li className="p-2 rounded cursor-pointer hover:bg-gray-300" onClick={() => navigate('/fee-structure')}>
            Fee Structure
          </li>
          <li className="p-2 rounded cursor-pointer hover:bg-gray-300" onClick={()=>{
             window.open('https://www.youtube.com/', '_blank');
          }} >
           Videos
          </li>
          <li className="p-2 rounded cursor-pointer hover:bg-gray-300" onClick={() => navigate('/pdf-section')}>
            PDF Section
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
