import React from 'react';
function VolunteerSection() {
  return (
    <>
      <div class="w3-container w3-padding-64 w3-theme-l5" id="volunteer">
      <div className="w3-row-padding w3-center" ><div class="w3-padding-16"><span class="w3-xlarge w3-border-teal w3-bottombar">Volunteer with us</span></div></div>
        <div class="w3-row">
          
          <div>
            <form class="w3-container w3-card-4 w3-padding-16 w3-white w3-round-large">
              <div class="row">
                <div class="column" style={{ float: 'left', width: '50%', padding: '10px' }}>
                  <div class="w3-section">
                    <label>First Name</label>
                    <input class="w3-input" type="text" id="First" name="Name" required></input>
                  </div>
                  <div class="w3-section">
                    <label>Email</label>
                    <input class="w3-input" type="text" id="Email"name="Email" required></input>
                  </div>
                </div>
                <div class="column" style={{ float: 'left', width: '50%', padding: '10px' }}><div class="w3-section">
                  <label>Last Name</label>
                  <input class="w3-input" type="text" id="Last"name="Name" required></input>
                </div>
                  <div class="w3-section">
                    <label>GitHub</label>
                    <input class="w3-input" type="text" id="Git"name="Name" required></input>
                  </div></div>
              </div>

              <div class="w3-section">
                <label>What are you passionate about?</label>
                <input class="w3-input" type="text" id="q1"name="Message" required></input>
              </div>
              <div class="w3-section">
                <label>What programming experience do you have?</label>
                <input class="w3-input" type="text" id="q2" name="Message" required></input>
              </div>

              <button type="reset" class="w3-button w3-right">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default VolunteerSection;
