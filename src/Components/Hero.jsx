import React, { useState, useEffect } from 'react';
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

function Hero() {
  const [current, setCurrent] = useState(0);
  const slides = [1, 2, 3, 4];

  // Previous Slide Function
  const previousSlide = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  // Next Slide Function
  const nextSlide = () => {
    const isLastSlide = current === slides.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  // Auto Slide Effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 6000); // Slide every 4 seconds

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, [current]); // Dependency: current

  return (
    <div className='overflow-hidden relative w-screen h-screen'>

      {/* Slide Container */}
      <div
        className='flex transition-transform ease-in-out duration-500'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >

        {/* Slide 1 */}
        <div className='h-screen w-screen flex-shrink-0 relative bg-[url("/Crousel/Farm.JPG")] bg-cover bg-center'>
          <div className='absolute inset-0 bg-black opacity-70'></div>
          <div className='relative z-10 h-[20vh] w-[25%] mt-[20vh] ml-[10vh]'>
            <h1 className='text-white font-bold font-serif text-[35px] cursor-default'>VerdeVista Farm</h1>
            <label className='text-white font-bold font-serif text-[10px]'>
              Ujjain State Highway, Behind Aurobindo Hospital, Reoti Range, Indore, MP
            </label>
            <br />
            <button className='text-black font-bold font-serif bg-white p-2 mt-[10px] text-center text-[15px] cursor-pointer hover:bg-gray-200 transition-all'>
              Learn More
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className='h-screen w-screen flex-shrink-0 relative bg-[url("/Crousel/Castleinn.png")] bg-cover bg-center'>
          <div className='absolute inset-0 bg-black opacity-70'></div>
          <div className='relative z-10 h-[20vh] w-[25%] mt-[20vh] ml-[10vh]'>
            <h1 className='text-white font-bold font-serif text-[35px] cursor-default'>Hotel Castle Inn</h1>
            <label className='text-white font-bold font-serif text-[10px]'>
              02 Mangal Nagar MR10, Indore, MP
            </label>
            <br />
            <button className='text-black font-bold font-serif bg-white p-2 mt-[10px] text-center text-[15px] cursor-pointer hover:bg-gray-200 transition-all'>
              Learn More
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className='h-screen w-screen flex-shrink-0 relative bg-[url("/Crousel/Casainn.JPG")] bg-cover bg-center'>
          <div className='absolute inset-0 bg-black opacity-70'></div>
          <div className='relative z-10 h-[20vh] w-[25%] mt-[20vh] ml-[10vh]'>
            <h1 className='text-white font-bold font-serif text-[35px] cursor-default'>Hotel Casa Inn</h1>
            <label className='text-white font-bold font-serif text-[10px]'>
              Kabit Khedi Road Near Brilliant Aura, Scheme 78, Indore, MP
            </label>
            <br />
            <button className='text-black font-bold font-serif bg-white p-2 mt-[10px] text-center text-[15px] cursor-pointer hover:bg-gray-200 transition-all'>
              Learn More
            </button>
          </div>
        </div>

        {/* Slide 4 */}
        <div className='h-screen w-screen flex-shrink-0 relative bg-[url("/Crousel/Saffroninn.JPG")] bg-cover bg-center'>
          <div className='absolute inset-0 bg-black opacity-70'></div>
          <div className='relative z-10 h-[20vh] w-[30%] mt-[20vh] ml-[10vh]'>
            <h1 className='text-white font-bold font-serif text-[35px] cursor-default'>Hotel Saffron Inn</h1>
            <label className='text-white font-bold font-serif text-[10px]'>
              28 B GangaDevi Nagar, Vijay Nagar, Indore, MP
            </label>
            <br />
            <button className='text-black font-bold font-serif bg-white p-2 mt-[10px] text-center text-[15px] cursor-pointer hover:bg-gray-200 transition-all'>
              Learn More
            </button>
          </div>
        </div>

      </div>

      {/* Navigation Buttons */}
      <div className='absolute top-10 text-[28px] h-full w-full flex items-center justify-between px-4'>
        <button onClick={previousSlide} className='text-white hover:scale-110 transition-all'><FaCircleArrowLeft /></button>
        <button onClick={nextSlide} className='text-white hover:scale-110 transition-all'><FaCircleArrowRight /></button>
      </div>

    </div>
  );
}

export default Hero;
