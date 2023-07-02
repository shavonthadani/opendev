import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
 
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link className='navbar-logo' activeClass="active" smooth spy to="home">
            OPEN DEV
            <i class="fa-solid fa-laptop-code"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link className='nav-links w3-border-teal' activeClass="active" smooth spy to="about">
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-links w3-border-teal'activeClass="active" smooth spy to="projects"
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links w3-border-teal'
                activeClass="active" smooth spy to="learn"
              >
                Learning
              </Link>
            </li><li className='nav-item'>
              <Link
                className='nav-links w3-border-teal'
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