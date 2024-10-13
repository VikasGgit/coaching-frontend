// src/components/Carousel.js

import React, { useEffect, useState } from 'react';

const Carousel = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval); // Clear the interval on unmount
  }, [items.length]);

  if (!items.length) {
    return <div>No items available.</div>; // Handle no items case
  }

  return (
    <div className="px-2 mb-4"> {/* Add padding on small screens */}
      <h2 className="flex items-center justify-center m-1 text-xl font-bold">{title}</h2>
      <div className="relative w-full h-64 overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            } w-full h-full flex items-center justify-center`}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="object-cover w-full h-full max-w-xs rounded-lg md:max-w-lg" // Responsive width
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
