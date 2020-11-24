import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import FAQ from "../components/FAQ";
import OtherInstructorsCard from "../components/OtherInstructorsCard";
import SyllabusWeekCard from "../components/SyllabusWeekCard";
import courselist from "../courselist";
import courseCategory from "../courseCategories";
import "./CoursePage.css";


function CoursePage(props){

  const [isDescriptionActive, setIsDescriptionActive] = useState(true);
  const [isSyllabusActive, setIsSyllabusActive] = useState(false);
   const courseId = useParams().courseId; 
   const identifiedCourse = courselist.find((element)=>{
       return element.id === courseId;
   });
   const identifedCategory = courseCategory.find((element)=>{
     return element.name === identifiedCourse.category;
   })

   function descriptionClickHandler(){
       setIsDescriptionActive(true);
       setIsSyllabusActive(false);
   }

   function syllabusClickHandler(){
       setIsDescriptionActive(false);
       setIsSyllabusActive(true);
   }
 
   return (
     <React.Fragment className = {`${props.className}`}>
     <div className = "course-page-breadcrum"><h3 style = {{margin:0}}><Link to = "/" className = "course-page-breadcrum-links">Home</Link>/<Link to = "/branches" className = "course-page-breadcrum-links">Branch</Link>/<Link className = "course-page-breadcrum-links" to = {"/"+identifedCategory.id}>{identifiedCourse.category}</Link>/<Link to = {`/courses/${identifiedCourse.id}`} className = "course-page-breadcrum-links active">{identifiedCourse.title}</Link></h3></div>
     <div className = "course-page-container">
         <div className = "course-page-basic-detail">
            <span className = "course-page-title">{identifiedCourse.title}</span>
            <span className = "course-page-free-tag">Free</span>
            <div className = "course-page-enroll-section">
            <div className = "course-page-enroll-section-instructor-img">
            <img src = {`${identifiedCourse.instructorImg}`} alt = {identifiedCourse.instructor}/>
            </div>
             <div className="course-page-enroll-section-instructor">
                 <span>Instructor:</span><br /><span className="gray-span">{`${identifiedCourse.instructor}`}</span>
             </div>
             <div className="course-page-enroll-section-category">
                 <span>Category:</span><br /><span className = "gray-span">{`${identifiedCourse.category}`}</span>
             </div>
             <div className="course-page-enroll-section-reviews">
               <span>Reviews:<br /></span>
               <i className="fas fa-star" style = {identifiedCourse.Reviews>=1?{color:"orange"}:{color:"lightgray"}}></i>
               <i className="fas fa-star" style = {identifiedCourse.Reviews>=2?{color:"orange"}:{color:"lightgray"}}></i>
               <i className="fas fa-star" style = {identifiedCourse.Reviews>=3?{color:"orange"}:{color:"lightgray"}}></i>
               <i className="fas fa-star" style = {identifiedCourse.Reviews>=4?{color:"orange"}:{color:"lightgray"}}></i>
               <i className="fas fa-star" style = {identifiedCourse.Reviews>=5?{color:"orange"}:{color:"lightgray"}}></i>
             </div>
               <button className = "enroll-button">Enroll Now</button> 
            </div>
            <div className = "course-page-big-image-container">
            <img className = "course-page-big-image" src = {`${identifiedCourse.imgSrc}`} alt = {identifiedCourse.title}/>
            <br /><br /><br /><br />
            <div className = "course-navigation">
                <span className = {!isDescriptionActive?"gray-span":""} onClick = {descriptionClickHandler}><i className="fas fa-pen"></i>   Description</span>
                <span className = {!isSyllabusActive?"gray-span":""} onClick = {syllabusClickHandler}><i className="far fa-bookmark"></i>   Curriculum</span>
                <span className = "gray-span"><i className="far fa-comment-dots"></i>   Forum</span>
            </div>
            <hr style = {{borderColor:"lightgray",borderTop:"none",borderRight:"none",borderLeft:"none",borderBottom:"2px solid lightgray"}} />
            <div className = "navigation-content">
                   
                   {isDescriptionActive &&<div className = "description-content">
                       <h1>About this course</h1>
                       <p style = {{color:"gray",lineHeight:"2"}}>{identifiedCourse.detailedabout}</p>
                       <h1>Other Instructors: </h1>
                       {identifiedCourse.otherInstructor.map((instructor,index)=>{
                          return (<OtherInstructorsCard key = {index} image={instructor.imgsrc} name = {instructor.name} designation = {instructor.designation}/>);
                       })}
                       <h1>FAQs</h1>
                       {identifiedCourse.FAQ.map((ques,index)=>{
                          return (<FAQ key = {index} Question = {ques.Question} Answer = {ques.Answer}/>);
                       })}
                   </div>}
                   {isSyllabusActive &&  <div className = "syllabus-content">
                       <h1>Syllabus</h1>
                       {identifiedCourse.weekWiseSyllabus.map((week,index)=>{
                           return(
                           <SyllabusWeekCard  
                             key = {index} 
                             week = {index} 
                             heading = {week.heading} 
                             brief = {week.brief} 
                             videos = {week.videos} 
                             audios = {week.audios} 
                             readings = {week.readings} 
                             Graded = {week.Graded}
                             />
                           );
                       })}
                   </div>}

            </div>
            </div>
            
         </div>
         <div className= "course-page-feature-section">
             <h2>Course Features</h2><br />
             <div className = "course-features-list">
               <span><i className="far fa-clock"></i> Duration</span><span className= "feature-list-answers">3 weeks</span>
             </div>
             <div className = "course-features-list">
               <span><i className="far fa-bell"></i> Lectures</span><span className= "feature-list-answers">8</span>
             </div>
             <div className = "course-features-list">
               <span><i className="fas fa-book"></i> Quizzes</span><span className= "feature-list-answers">3</span>
             </div>
             <div className = "course-features-list">
               <span><i className="fas fa-user-friends"></i> Students</span><span className= "feature-list-answers">1</span>
             </div>
             <div className = "course-features-list">
               <span><i className="far fa-thumbs-up"></i> Pass Percentage</span><span className= "feature-list-answers">75</span>
             </div>
             <div className = "course-features-list">
               <span><i className="fas fa-pen"></i> Max Retakes</span><span className= "feature-list-answers">3</span>
             </div>
             <br />
             <h2>Certificate</h2>
             <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null.</p>
             <img className = "certificate-preview" src ="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/award-certificate-schools-sports-club-bc64dc33e50d2d914e88f53027c909d8_screen.jpg?ts=1563368800"  alt = "course-certificate"/>
              
         </div>
         
     </div>  

     </React.Fragment>
     
   );

}

export default CoursePage;