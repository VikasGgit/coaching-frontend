// src/components/SliderContainer.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeacher, fetchStudent } from './store/reducers/sliderReducers.js';
import Carousel from './Carosal.jsx';

const SliderContainer = () => {
  const dispatch = useDispatch();
  const { students, teachers, loading, error } = useSelector((state) => state.slider);

  useEffect(() => {
    dispatch(fetchStudent());
    dispatch(fetchTeacher());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="px-2"> {/* Add padding for overall responsiveness */}
      <Carousel title="Students" items={students} />
      <Carousel title="Teachers" items={teachers} />
    </div>
  );
};

export default SliderContainer;
