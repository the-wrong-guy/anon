import React from "react";
import "./OurPrograms.css";
import courselist from "../../courselist";
import CourseCard from "../CourseCard";
import { Link } from "react-router-dom";

function OurPrograms() {

  function scrollToTop() { 
    window.scrollTo(0, 0);
}
  return (
    <div className="ourprograms">
      <h1>Our Courses</h1>
      <p>
        Our Featured Courses are selected through a rigorous process and
        uniquely created for each semester
      </p>

      <div className = "course-cards-container">
               
          <CourseCard 
          key = {courselist[0].id} 
          id = {courselist[0].id} 
          title = {courselist[0].title} 
          instructor = {courselist[0].instructor} 
          about = {courselist[0].about} 
          imgSrc = {courselist[0].imgSrc}/>     

          <CourseCard 
          key = {courselist[14].id} 
          id = {courselist[14].id} 
          title = {courselist[14].title} 
          instructor = {courselist[14].instructor} 
          about = {courselist[14].about} 
          imgSrc = {courselist[14].imgSrc}/>  

          <CourseCard 
          key = {courselist[16].id} 
          id = {courselist[16].id} 
          title = {courselist[16].title} 
          instructor = {courselist[16].instructor} 
          about = {courselist[16].about} 
          imgSrc = {courselist[16].imgSrc}/>       
            </div>
      <Link to = "/branches" onClick = {scrollToTop}>
      <button className="ourprograms__buttonSecondary">
        View our Courses
      </button>
      </Link>
    </div>
  );
}

export default OurPrograms;
