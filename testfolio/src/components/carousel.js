import React, { useState } from "react";

const imageList = [
  "https://images.unsplash.com/photo-1556983852-43bf21186b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1601742348711-716fec4afbd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80",
  "https://images.unsplash.com/photo-1633360889697-7b2071ec80a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2107&q=80",
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
            className={`max-h-600px max-w-600px p-2 ${
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
