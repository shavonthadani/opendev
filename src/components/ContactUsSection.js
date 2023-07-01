import React from 'react';
function ContactUsSection() {

  return (
    <><div class="w3-container w3-light-grey">
    <div class="w3-row-padding">
    <div class="w3-padding-16"><span class="w3-xlarge w3-border-teal w3-bottombar">Contact Us</span></div>
      <div class="w3-col m6">
      
      <div>
            <form class="w3-container w3-card-4 w3-padding-16 w3-white w3-round-large">
              <div class="row">
                <div class="column" style={{ float: 'left', width: '50%', padding: '10px' }}>
                  <div class="w3-section">
                    <label>Name</label>
                    <input class="w3-input" type="text" id="First" name="Name" required></input>
                  </div>
                </div>
                <div class="column" style={{ float: 'left', width: '50%', padding: '10px' }}><div class="w3-section">
                  <label>Email</label>
                  <input class="w3-input" type="text" id="Last"name="Name" required></input>
                </div>
                 </div>
              </div>
              <div class="w3-section">
                <label>Message</label>
                <input class="w3-input" type="text" id="q2" name="Message" required></input>
              </div>
              <div class="w3-section">
                <label>Message</label>
                <input class="w3-input" type="text" id="q2" name="Message" required></input>
              </div>

              <button type="reset" class="w3-button w3-right">Send</button>
            </form>
          </div>
      </div>
      <div class="w3-col m6 w3-center">
        <img class="w3-image w3-round-large" src="images/coding.jpg" width="600" height="30"></img>
      </div>
    </div>
  </div>
    </>
  );
}

export default ContactUsSection;
