import React from 'react';
import logo from '../assets/images/kbalogo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <a href="#">
          <img className='logo' src={logo} alt="logo" />
        </a>
      </div>
      <div className='navbar-links'>
        <a href="/home" className='link'>Home</a>
        <a href="/courses" className='link'>Courses</a>
        <a href="contact" className='link'>Contact Us</a>
        <a href="/add-course" className='link'>Add Course</a>
        <a href="/" className='link'>Logout</a>
      </div>
    </div>
  );
};

export default Navbar;
