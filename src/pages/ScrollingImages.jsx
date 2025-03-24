import React from "react";
import "../index.css";

const ScrollingImages = () => {
  // Array of image filenames (assuming images are in the public folder)
  const images = [
    "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg",
    "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg",
    "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg",
    "image13.jpg", "image14.jpg", "image15.jpg", "image16.jpg"
  ];

  // Split the images into two arrays (8 images each)
  const firstRowImages = images.slice(0, 8);
  const secondRowImages = images.slice(8, 16);

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg animate-fadeIn">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-400 animate-bounce">Gallery</h1>
      <h2 className="text-lg md:text-xl mb-4 text-white-400 animate-zoomIn">A glimpse into NSS@KEC</h2>

      {/* First Row of Scrolling Images (Right to Left) */}
      <div className="overflow-hidden w-full mb-4">
        <div className="whitespace-nowrap animate-scroll space-x-2 md:space-x-4">
          {firstRowImages.map((image, index) => (
            <img
              key={index}
              src={`/${image}`}
              alt={`Image ${index + 1}`}
              className="inline-block rounded-lg shadow-lg w-48 h-36 md:w-80 md:h-60 hover:animate-zoom hover:shadow-2xl transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* Second Row of Scrolling Images (Left to Right) */}
      <div className="overflow-hidden w-full">
        <div className="whitespace-nowrap animate-scroll-reverse space-x-2 md:space-x-4">
          {secondRowImages.map((image, index) => (
            <img
              key={index + 8}
              src={`/${image}`}
              alt={`Image ${index + 9}`}
              className="inline-block rounded-lg shadow-lg w-48 h-36 md:w-80 md:h-60 hover:animate-bounce hover:shadow-2xl transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingImages;
