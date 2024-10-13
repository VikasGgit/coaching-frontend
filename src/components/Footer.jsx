// src/components/Footer.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store/reducers/miscReducers';

const Footer = () => {
  
const dispatch=useDispatch();
useEffect(()=>{
  dispatch(fetchData())
}, [dispatch])

const { misc, loading, error } = useSelector((state) => state.misc);
  console.log(misc);
  
  return (
    <footer className="p-4 text-center text-white bg-zinc-600">
      <div className="mb-2 contact-details">
        <p>Contact us: {misc.contactNumber}</p>
        <p>Address: {misc.address}</p>
      </div>
      {/* <div className="space-x-2 social-media">
        <a href="#" className="underline">Facebook</a>
        <a href="#" className="underline">Twitter</a>
        <a href="#" className="underline">Instagram</a>
      </div> */}
    </footer>
  );
};

export default Footer;
