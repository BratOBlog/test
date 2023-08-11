import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
    return (
    <nav>
      <ul className="flex justify-end bg-gray-200 text-red-500">
        <li>
          <Link className="text-purple-800" to="/">Home</Link>
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
