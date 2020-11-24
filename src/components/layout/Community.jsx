import React from "react";

import "./Community.css";
import people from "../../images/people.jpg";
import teacher  from "../../images/teacher.jpg";
import study from "../../images/CommunityouterDIv3.jpg"
import student from "../../images/SmilingStudent.jpg";
import student2 from "../../images/student2.jpg";

export default function Community(){
  
    return (
        <div className = "community-section">
            <h2 style = {{color:"#40C4FF",marginBottom:"0"}}>Advising Success.</h2>
            <h1 style = {{fontSize:"54px",marginBottom:"0"}}>Community of Learners</h1>
            <p style = {{fontSize:"20px",width:"60%",textAlign:"center"}}>Lorem Ipsn gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit</p>
            <div className = "community-main-div">
              <div className = "community-main-div-row">
                <div className = "outer-div-1">
                 <div className = "outer-div-1-part-1">
                 <div className = "outer-div-1-child-1">
                      <i className="fa fa-diamond" aria-hidden="true"></i>
                      Motivated achievers perform,learn,excel
                   </div>
                   <div className = "outer-div-1-child-2">
                     <img src = {people} alt = "people"/>
                   </div>
                 </div>
                 <div className = "outer-div-1-part-2">
                 <div className = "outer-div-1-child-3">
                      <i className="fa fa-address-card-o" aria-hidden="true"></i>
                       Education is your door to the future.
                   </div>
                   <div className = "outer-div-1-child-4">
                      <i className="fa fa-globe" aria-hidden="true"></i>
                      Motivated achievers perform,learn,excel
                   </div>
                 </div>
                </div>
                <div className = "outer-div-2">
                    <img src = {teacher} alt = "teacher" />
                    <div className = "outer-div-2-content">
                        <h2 style = {{color:"#40C4FF"}}>New Courses</h2>
                        <h1 style = {{color:"white",fontSize:"50px",fontWeight:"530"}}>Empowering children to reach their potential.</h1>
                        <h3 style = {{color:"white",fontWeight:"normal",lineHeight:"1.4",fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                        <button className = "community-button">REGISTER NOW</button>
                    </div>
                </div>
                </div>
                <div className = "community-main-div-row">
                <div className = "outer-div-3">
                <img src = {study} alt = "study" />
                <div className = "outer-div-3-content">
                        <h2 style = {{color:"white"}}>Closer to Home</h2>
                        <h1 style = {{color:"white",fontSize:"50px",fontWeight:"530"}}>Personalized Tutoring</h1>
                        <h3 style = {{color:"white",fontWeight:"normal",lineHeight:"1.4",fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                        <button className = "community-button"><i className="fa fa-video" aria-hidden="true" style = {{color:"lightgray",margin:"0"}}></i>  WATCH VIDEO</button>
                    </div>
                </div>
                <div className = "outer-div-4">
                <div className = "outer-div-4-part-1">
                 <div className = "outer-div-4-child-1">
                   <img src = {student} alt = "student"/>
                   </div>
                   <div className = "outer-div-4-child-2">
                      <i className="fa fa-users" aria-hidden="true"></i>
                      Together we create a loving community
                   </div>
                 </div>
                 <div className = "outer-div-4-part-2">
                 <div className = "outer-div-4-child-3">
                      <i className="fa fa-comment-o" aria-hidden="true"></i>
                       The harder I work,
                       the smarter I get.
                   </div>
                   <div className = "outer-div-4-child-4">
                      <img src = {student2} alt = "student2"/>
                   </div>
                 </div>
                </div>
                </div>
            </div>
        </div>
    );


}