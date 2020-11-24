import React from "react";
import { Link, useParams } from "react-router-dom";

import "./CourseList.css";
import courselist from "../courselist";
import CourseCard from "../components/CourseCard";
import courseCategories from "../courseCategories";




function CourseList(props){
   const catId = useParams().catId;
   const courseName = courseCategories.find((category)=>category.id === catId);
   const courseByCategory = courselist.filter((course)=>course.category === courseName.name);
   return (<React.Fragment className =  {`${props.className}`}>
            <div className = "course-list-breadcrum">
             <div className = "overlay"></div>
             <h1 className = "category-heading">{courseName.name}</h1>
            </div>
            <div className = "course-list-page-breadcrum"><h3 style = {{margin:0}}><Link to = "/" className = "course-list-page-breadcrum-links">Home</Link>/<Link to = "/branches" className = "course-list-page-breadcrum-links">Branch</Link>/<Link className = "course-list-page-breadcrum-links active" to = {"/"+courseName.id}>{courseName.name}</Link></h3></div>
            <div className = "category-page-about-course-section">
               <img className = "category-page-about-course-image" src = {courseName.imgSrc} alt = {courseName.name}/>
               <div className ="category-page-about-course-section-content">
                 <h1 style = {{textDecoration:"underline"}}>About The Course</h1>
                 <p style ={{textAlign:"justify"}}>{courseName.about}</p>
                 <ul style = {{textAlign:"left",paddingLeft:"15px"}}>
                     {courseName.bulletPoints.map((points,index)=>{
                         return(<li style = {{lineHeight:1.5}} key = {index}>{points.point}</li>);
                     })}
                 </ul>
               </div>
             </div>  
            <div className = "course-cards-container">
               <p className = "courses-pre-heading">Online Courses</p>
               <p className ="courses-heading">We found {courseByCategory.length} course{courseByCategory.length!==1&&"s"} for you</p>
                  {courseByCategory.map((course)=>{
                    return (
                     <CourseCard key = {course.id} id = {course.id} title = {course.title} instructor = {course.instructor} about = {course.about} imgSrc = {course.imgSrc}/>
                     );
                    })}
            </div>
           </React.Fragment>
          );
}

export default CourseList;