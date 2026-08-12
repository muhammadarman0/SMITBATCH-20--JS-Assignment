import React from 'react'
import Weblogo from "../assets/react.svg"
const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={Weblogo} alt="StyleHub Logo" />
        <h2>Menu<span>Card</span></h2>
      </div>

      <div className="searchBox">
        <input
          type="text"
          placeholder="Search your style..."
        />

        <button>
          Search
        </button>
      </div>

    </nav>
  )
}

export default Navbar