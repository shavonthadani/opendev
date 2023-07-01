import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
  const handleClickScroll = () => {
    const element = document.getElementById('volunteer');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
          {button && <Button buttonStyle='btn--outline'  onClick={handleClickScroll}>Volunteer</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
