import React, { useState } from 'react';
import '../App.css';
import './HomeSection.css';

function HomeSection() {
  const handleClickScroll = () => {
    const element = document.getElementById('volunteer');
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="hero-container">
        <h1>Open Dev</h1>
        <p>Open Source, Open Minds, Open Doors</p>
        <div className="hero-btns">
          <button className="btn btn-scroll btn-lg btn-light w3-border-teal" onClick={handleClickScroll}>
            Volunteer With Us Today <i class="fa-solid fa-laptop-code"></i>
          </button>
        </div>
        <div className="w3-row-padding w3-center" style={{ marginTop: 64 }}>
          <div className="w3-quarter" style={{ color: 'white' }}>
            <i className="fa-solid fa-people-group w3-margin-bottom w3-center" />
            <p className="w3-large">Active Contributors: 2,500</p>
          </div>
          <div className="w3-quarter" style={{ color: 'white' }}>
            <i class="fa-solid fa-pen-ruler w3-margin-bottom w3-center"></i>
            <p className="w3-large">Total Projects:<br />105</p>
          </div>
          <div className="w3-quarter" style={{ color: 'white' }}>
            <i className="fa-solid fa-code-branch w3-margin-bottom" />
            <p className="w3-large">Pull Requests:<br />50,000</p>
          </div>
          <div className="w3-quarter" style={{ color: 'white' }}>
            <i className="fa-solid fa-bug w3-margin-bottom" />
            <p className="w3-large">Issues Resolved: 175,000</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection;
