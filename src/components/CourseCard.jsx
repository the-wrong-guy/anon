import React from "react";
import { Link } from "react-router-dom";

import "./CourseCard.css";

function CourseCard(props){

    function scrollToTop() { 
        window.scrollTo(0, 0);
        if(props.onClick){
        props.onClick(); 
        }
    }
 
    return (
    
            <div className = "course-card">
            <Link to = {`/courses/${props.id}`} onClick = {scrollToTop} style = {{textDecoration:"none"}}>            
            <img className = "course-img" 
              src = {props.imgSrc}
              alt = {props.title}/>
            <div className="course-card-about-container">
               <span className = "course-title">{props.title}</span>
               <span className = "course-new-tag">NEW</span><span className ="course-popular-tag">POPULAR</span>
               <p className = "course-instructor-name">{props.instructor}</p>
               <p className = "course-about">{props.about}</p>
            </div>
            </Link>
            <p className= "course-card-icons">
              <Link to = "/" className = "icon"><i className="fas fa-certificate"></i></Link>
              <Link to = "/" className = "icon"><i className="fas fa-clock"></i></Link>
              <Link to = "/" className = "icon"><i className="fas fa-star"></i></Link>
              <Link to = "/" className = "icon"><i name = "tag" className="fas fa-tag"></i></Link>
            </p>
         </div>
        
    );

}

export default CourseCard;