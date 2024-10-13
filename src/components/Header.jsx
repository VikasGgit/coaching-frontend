// src/components/Header.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store/reducers/miscReducers';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();

  // Fetch the data on component mount
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Get the values from Redux store
  const { misc, loading, error } = useSelector((state) => state.misc);
  console.log(misc);
const navigate=useNavigate();
  return (
    <>
      {/* Header Display */}
      <div onClick={()=>navigate('/')}
      className="flex items-center justify-center m-1 font-serif text-2xl font-extrabold cursor-pointer md:text-4xl bg-slate-300">
        {misc.headerData}
      </div>
      <header className="flex flex-col items-center justify-between p-4 text-white md:flex-row bg-zinc-600">
        <div onClick={()=>navigate('/')}
        className="text-lg font-bold cursor-pointer md:text-2xl logo">{misc.headerData}</div>
        
        {/* Search Bar
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 mt-2 mb-2 rounded md:w-1/3"
        /> */}
        
        {/* Login and Sign Up Buttons */}
        <div className="flex flex-col md:flex-row md:space-x-2">
          <button className="p-2 bg-blue-700 rounded">Login</button>
          {/* <button className="p-2 bg-blue-700 rounded">Sign Up</button> */}
        </div>
      </header>
    </>
  );
};

export default Header;
