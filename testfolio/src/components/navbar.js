import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
    return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <ul className=" text-blue-500 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <li>
          <Link className="text-purple-900" to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
