import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {

  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link className='navbar-logo' activeClass="active" smooth spy to="home">
            OPEN DEV
            <i style={{color: "teal"}} class="fa-solid fa-laptop-code"></i>
          </Link>
          <ul className={'nav-menu active'}>
            <li className='nav-item'>
              <Link className='nav-links' activeClass="active" smooth spy to="about">
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-links' activeClass="active" smooth spy to="projects"
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                activeClass="active" smooth spy to="learn"
              >
                Learning
              </Link>
            </li><li className='nav-item'>
              <Link
                className='nav-links'
                activeClass="active" smooth spy to="contact"
              >
                Contact Us
              </Link>
            </li>
            
            
            
 
          </ul>
          <Link
                className='btn--outline'
                activeClass="active" smooth spy to="volunteer"
              >
                Volunteer
              </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
