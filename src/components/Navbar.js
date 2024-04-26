import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav>
      <div className="left-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link> {/* Added Contact link */}
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn">Gallery</button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/gallery/sketches">Sketches</Link>
              <Link to="/gallery/paintings">Paintings</Link>
              <Link to="/gallery/nature">Nature</Link>
            </div>
          )}
        </div>
      </div>
      <div className="right-links">
        <Link to="/admin/login">Admin Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
