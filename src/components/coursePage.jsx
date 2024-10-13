// src/components/CourseList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from './store/reducers/courseReducer'; // Import your action

const CourseList = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) {
    return <div className="text-center">Loading...</div>; // Loader component
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>; // Error handling
  }

  return (
    <div className="flex flex-wrap justify-center p-4 bg-zinc-100 ">
      {courses.map((course) => (
        <div
          key={course._id} // Use the unique ID for each course
          className="flex flex-col items-center w-full p-4 m-2 transition-transform transform bg-white rounded-lg shadow-md sm:w-1/2 md:w-1/3 lg:w-1/4 hover:scale-105"
        >
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg"> {/* Wrap image in a container */}
            <img
              src={course.image}
              alt={course.courseName}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110" // Add hover effect
            />
          </div>
          <div className="mt-2">
            <h3 className="text-lg font-semibold">{course.courseName}</h3>
            <p className="text-sm text-gray-600">For class: {course.class}</p>
            <p className="text-sm text-gray-700">{course.description}</p>
            <p className="mt-2 font-bold text-md">Offer Price: ₹ {course.disPrice}</p>
            <p className="text-sm text-gray-500 line-through">Price: ₹ {course.listPrice}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
