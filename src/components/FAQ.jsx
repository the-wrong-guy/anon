import React, { useState } from "react";

import "./FAQ.css";

function FAQ(props){
  
    const [isOpen,setIsOpen] = useState(false);
    

    function clickHandler(){
        setIsOpen(prev=>!prev);
    }
   return (
       <div className = "FAQ-container">
           <span className = "down-arrow" onClick = {clickHandler}><i className="fas fa-angle-down"></i></span><span className = "FAQ-Question">    {props.Question}</span>
           {isOpen && <p className = "FAQ-Answer">{props.Answer}</p>}
       </div>
   );
}

export default FAQ;