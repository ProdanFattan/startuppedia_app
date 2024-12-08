// components/Slider.js
"use client"



// components/Slider.js
import React, { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    {
      src: "https://picsum.photos/200/300/?blur",
      buttons: ["Button 1", "Button 2", "Button 3"],
      positions: ["top-24 left-10", "bottom-10 left-10", "top-24 right-10"],
    },
    {
      src: "https://picsum.photos/200/300?grayscale",
      buttons: ["Button 4", "Button 5", "Button 6"],
      positions: ["top-24 left-5", "bottom-5 right-10", "top-24 right-20"],
    },
    {
      src: "https://picsum.photos/seed/picsum/200/300",
      buttons: ["Button 2", "Button 3", "Button 4"],
      positions: ["top-20 right-20", "bottom-12 left-5", "top-24 left-3"],
    },
    {
      src: "https://picsum.photos/id/237/200/300",
      buttons: ["Button 5", "Button 1", "Button 6"],
      positions: ["top-24 left-20", "top-32 right-15", "bottom-8 left-3"],
    },
    {
      src: "https://picsum.photos/200/300",
      buttons: ["Button 3", "Button 6", "Button 2"],
      positions: ["top-24 right-5", "bottom-5 left-12", "top-30 left-10"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image */}
      <img
        src={currentImage.src}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Logo with White Circle */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg">
          <div className="text-gray-800 text-xl font-bold">My Logo</div>
        </div>
      </div>

      {/* Buttons with White Circles */}
      {currentImage.buttons.map((button, index) => (
        <div
          key={index}
          className={`absolute ${currentImage.positions[index]} flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg`}
        >
          <button className="text-blue-500 font-semibold hover:text-blue-600">
            {button}
          </button>
        </div>
      ))}

      {/* Manual Controls */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
