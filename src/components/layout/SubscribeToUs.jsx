import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import "./SubscribeToUs.css";

function Testimonials() {
  return (
   
    <div className = "subscribe-section">
        <div className = "overlay-subscribe-section">
          
          </div>

          <div className = "subscribe-content">
          <MailOutlineIcon className = "mail-icon" style = {{fontSize:"100px",color:"rgb(235, 150, 0)"}}/>
             <form className = "subscribe-form">
               <input type="email" placeholder="Subscribe to Get2Learn newsletter" />
               <button className = "subscribe-button">Subscribe</button>
             </form>
          </div>
    </div>

  );
  
}

export default Testimonials;
