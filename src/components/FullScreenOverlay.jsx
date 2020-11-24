import React from "react";

import "./FullScreenOverlay.css";

export default function FullScreenOverlay(props){

   return (
   
    <div className = "full-screen-overlay" onClick = {props.onClick}  style = {{backgroundColor:props.color}}>

    </div>

   );

}