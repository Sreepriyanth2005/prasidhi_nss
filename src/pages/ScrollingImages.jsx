import React from "react";
import "../index.css";

const ScrollingImages = () => {
  // Array of image filenames (assuming images are in the public folder)
  const images = [
    "background1.jpg", "background1.jpg", "background1.jpg", "background1.jpg",
    "background1.jpg", "background1.jpg", "background1.jpg", "background1.jpg",
    "background1.jpg", "background1.jpg", "background1.jpg", "background1.jpg",
    "background1.jpg", "background1.jpg", "background1.jpg", "background1.jpg"
  ];

  // Split the images into two arrays (8 images each)
  const firstRowImages = images.slice(0, 8);
  const secondRowImages = images.slice(8, 16);

  return (
    <div className="flex flex-col items-center justify-center p-2 rounded-lg animate-fadeIn md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-400 animate-bounce">Gallery</h1>
      <h2 className="text-lg md:text-xl mb-4 text-white-400 animate-zoomIn">A glimpse into NSS@KEC</h2>
      {/* First Row of Scrolling Images (Right to Left) */}
      <div className="overflow-hidden w-full mb-4">
        <div className="whitespace-nowrap animate-scroll space-x-0 md:space-x-0">
          {[...firstRowImages, ...firstRowImages].map((image, index) => (
            <img
              key={index}
              src={`/${image}`}
              alt={`Image ${index + 1}`}
              className="inline-block rounded-lg shadow-lg p-2 w-65 h-50 md:w-80 md:h-60 hover:animate-zoom hover:shadow-2xl transition-all duration-900"
            />
          ))}
        </div>
      </div>

      {/* Second Row of Scrolling Images (Left to Right) */}
      <div className="overflow-hidden w-full">
        <div className="whitespace-nowrap animate-scroll-reverse space-x-0 md:space-x-0">
          {[...secondRowImages, ...secondRowImages].map((image, index) => (
            <img
              key={index + 8}
              src={`/${image}`}
              alt={`Image ${index + 9}`}
              className="inline-block rounded-lg p-2 shadow-lg w-65 h-50 md:w-80 md:h-60 hover:animate-zoom hover:shadow-2xl transition-all duration-900"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingImages;
