import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from './store/reducers/courseReducer'; // Import your fetchCourses action
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // For navigation icons

const Carousel = ({ title }) => {
  const dispatch = useDispatch(); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const courses = useSelector(state => state.course.courses); 

  useEffect(() => {
    dispatch(fetchCourses()); 
  }, [dispatch]);

  // Automatic carousel change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % courses.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [courses.length]);

  // Manual navigation handlers
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? courses.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  if (!courses.length) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="flex flex-col items-center px-4 mb-8 lg:px-0">
      <h1 className='text-3xl font-extrabold' >Featured Courses</h1>
      <div className="w-full max-w-lg"> {/* Changed from max-w-md to max-w-lg */}
        <h2 className="mb-6 text-3xl font-semibold text-center text-black">{title}</h2> {/* Font color changed to black */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg h-80 md:h-96 bg-gradient-to-r from-green-400 to-blue-500"> {/* Background color changed */}
          
          {/* Course Slides */}
          {courses.map((course, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              } flex flex-col items-center justify-center`}
            >
             <img
  src={course.image}
  alt={course.courseName}
  className="object-cover h-32 mb-4 rounded-md shadow-lg w-60 md:w-80 md:h-48"
/>

              <h3 className="mb-2 text-lg font-bold text-black md:text-xl">{course.courseName}</h3> {/* Font color changed to black */}
              
              <p className="px-6 mb-2 text-sm text-center text-black md:text-base md:px-12">For class : {course.class}</p> {/* Font color changed to black */}
              <p className="px-6 mb-2 text-sm text-center text-black md:text-base md:px-12">{course.description}</p> {/* Font color changed to black */}
              <p className="text-sm font-semibold text-black md:text-lg">Price: ₹ {course.disPrice}</p> {/* Font color changed to black */}
            </div>
          ))}

          {/* Navigation Arrows */}
          <div className="absolute left-0 transform -translate-y-1/2 top-1/2">
            <button
              onClick={prevSlide}
              className="p-2 bg-blue-700 rounded-full shadow-md hover:bg-blue-600"
            >
              <FaArrowLeft className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="absolute right-0 transform -translate-y-1/2 top-1/2">
            <button
              onClick={nextSlide}
              className="p-2 bg-blue-700 rounded-full shadow-md hover:bg-blue-600"
            >
              <FaArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4">
          {courses.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
