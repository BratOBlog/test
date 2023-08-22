import React, { useState, useRef } from "react"
import { Link } from "gatsby"

const PortfolioDropdown = ({ projects }) => {
  const [show, setShow] = useState(false);
  const delayRef = useRef(null);

  const handleMouseEnter = () => {
    setShow(true);
    clearTimeout(delayRef.current);
  };

  const handleMouseLeave = () => {
    delayRef.current = setTimeout(() => {
      setShow(false);
    }, 300);
  };

  return (
    <div className="relative">
      <Link
        to="/portfolio" 
        className="flex items-center py-2 pl-3 pr-2 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Portfolio <span className="ml-1">&#9660;</span> 
      </Link>
      <div
        className={`${
          show ? "block" : "hidden"
        } absolute mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-opacity duration-300`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {projects.map((project, index) => (
          <Link
            key={index}
            to={project.path}
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {project.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PortfolioDropdown;
