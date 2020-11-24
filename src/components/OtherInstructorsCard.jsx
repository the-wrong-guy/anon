import React from "react";

import "./OtherInstrcutorsCard.css";

function OtherInstructorsCard(props){
   return (
       <div className = "other-instructors-card">
            <div className = "other-instructors-card-img">
            <img src = {props.image} alt = "instructor"/>
            </div>
             
             <p>{props.name}</p><br /> <p className = "gray-span">{props.designation}</p>
       </div>
   );
}

export default OtherInstructorsCard;