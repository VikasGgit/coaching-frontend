// src/components/ContactButton.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { fetchData } from './store/reducers/miscReducers';

const Contact = () => {
  const dispatch = useDispatch();
  const { misc, loading, error } = useSelector((state) => state.misc);
    
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div className="fixed z-50 p-2 text-white bg-gray-800 rounded-full bottom-5 right-5">Loading...</div>;
  }

  if (error) {
    return <div className="fixed z-50 p-2 text-white bg-red-500 rounded-full bottom-5 right-5">Error: {error}</div>;
  }

  const handleCall = () => {
    if (misc.contactNumber) {
      window.open(`tel:${misc.contactNumber}`, '_self');
    }
  };

  const handleWhatsApp = () => {
    if (misc.contactNumber) {
        const feeMessage = encodeURIComponent(`Hello, I would like to inquire about the fee structure. I am coming from your Website`);

        window.open(`https://wa.me/91${misc.contactNumber}?text=${feeMessage}`, '_blank');
        
    }
  };

  return (
    <div className="fixed z-50 flex flex-col space-y-2 bottom-5 right-5">
      <button
        onClick={handleCall}
        className="flex items-center p-2 text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700"
      >
        <FaPhone className="" />
      </button>
      <button
        onClick={handleWhatsApp}
        className="flex items-center p-2 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700"
      >
        <FaWhatsapp className="" />
      </button>
    </div>
  );
};

export default Contact;
