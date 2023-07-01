import React from 'react';
import './AboutSection.css';
function AboutSection() {
  return (
    <div className="w3-container " style={{ padding: "1px 1px" }} id="about">
      <div className="w3-row-padding w3-center" style={{ marginTop: 64 }}>
      <div class="w3-padding-16"><span class="w3-xlarge w3-border-teal w3-bottombar">About Us</span></div>

        <div className="w3-quarter ">
          <i className="fa-solid fa-people-group w3-margin-bottom w3-jumbo w3-center" />
          <p className="w3-large">Community</p>
          <p>
          We are a community of developers who build open source software for the greater good
          </p>
        </div>
        <div className="w3-quarter">
          <i className="fa fa-heart w3-margin-bottom w3-jumbo" />
          <p className="w3-large">Passion</p>
          <p>
          At our platform, we strive to connect you to projects that align with your passions and interests </p>        </div>
        <div className="w3-quarter">
          <i className="fa-solid fa-book w3-margin-bottom w3-jumbo" />
          <p className="w3-large">Educate</p>
          <p>
          We provide a wealth of resources to help you get started on your software development journey</p>
        </div>
        <div className="w3-quarter">
          <i className="fa-solid fa-brain w3-margin-bottom w3-jumbo" />
          <p className="w3-large">Inquire</p>
          <p>We strive to be a driving force behind the transformative solutions that will shape a better future for all         </p>
        </div>
      </div>

      </div>

  );
}

export default AboutSection;
