import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";



export default function NavBar(props){
    

   return (
      <div className = "header-container">
       <nav className = "main-header">
        <Link to = "/" style = {{textDecoration:"none"}} onClick = {window.scrollTo(0, 0)}>
         <span className = "header-logo">
          <span style = {{color:"#008fdf"}}>Get2</span>
          <span style = {{color:"#fee500"}}>Learn</span>
          </span>
          </Link>
          {props.children}
       </nav>
       </div>
   );

}

