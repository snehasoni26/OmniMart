import React from "react";
import {
    BrowserRouter, Routes, Route,
  } from 'react-router-dom';

  
function HeroSection() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Hero Text */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Where Virtual Meets Reality
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              Discover a New Way to Shop – Personalized, Immersive, and Effortless.
              Step into the Next Generation of Retail, Anytime, Anywhere.
            </p>
            <div className="mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out">
                Start Shopping
              </button>
              <button className="bg-transparent border border-gray-400 text-gray-400 font-bold py-3 px-6 rounded-full ml-4 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="https://via.placeholder.com/500x400"
              alt="Virtual Shopping"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
