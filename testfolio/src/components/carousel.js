import React, { useState } from "react";

const imageList = [
  "https://images.unsplash.com/photo-1572546946887-67f2289e1c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1527891751199-7225231a68dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1642840095012-6a8bd2a88457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1542800952-e5471ed41326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
 "https://images.unsplash.com/photo-1504494645474-cc4e25299579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
];

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  function handleNextClick() {
    setCurrentImage((prevImage) => (prevImage + 1) % imageList.length);
  }

  function handlePrevClick() {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + imageList.length) % imageList.length
    );
  }

  return (
    <div className="carousel flex flex-row items-center justify-center space-x-4">
      <button
        className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600"
        onClick={handlePrevClick}
      >
        Previous
      </button>

    
      <div className="flex justify-center mt-4">
        {imageList.map((image, index) => (
          <div
            key={index}
            className={`max-h-500px max-w-500px p-2 ${
              currentImage === index ? "" : "hidden"
            }`}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <button
        className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
}
