import React from "react";

import "./SyllabusWeekCard.css"

function SyllabusWeekCard(props){
    
     return (
         <div className = "syllabus-week-card-container">
             <h2>WEEK {props.week+1}</h2>
             <div className = "week-card-content-container">
                 <h3>{props.heading}</h3>
                 <p>{props.brief}</p>
                 <h3><i className = "fas fa-book"></i>    {props.videos.length} {props.videos.length!==0&&props.videos.length === 1?"video":"videos"}{props.audios.length!==0&&props.audios.length === 1?", "+props.audios.length+" audio":", "+props.audios.length+" audios"} {props.readings.length!==0&&props.readings.length === 1?", "+props.readings.length+" reading":", "+props.readings.length+"readings"}</h3>
                 {props.videos.map((video,index)=>{
                     return(
                      
                      <p className = "syllabus-videoOrAudio-tab" key = {index}><i className="fas fa-video"></i>    {video.title}<span><i className = "fas fa-clock" style = {{color:"rgb(0, 162, 255)"}}></i>{video.duration} minutes</span></p>
                      
                     );
                 })}
                 {props.audios.map((audio,index)=>{
                     return(
                      
                      <p className = "syllabus-videoOrAudio-tab" key = {index}><i className="fas fa-volume-up"></i>    {audio.title}<span><i className = "fas fa-clock" style = {{color:"rgb(0, 162, 255)"}}></i>{audio.duration} minutes</span></p>
                      
                     );
                 })}
                 {props.readings.map((reading,index)=>{
                     return(
                      
                      <p className = "syllabus-videoOrAudio-tab" key = {index}><i className="fas fa-file"></i>    {reading.title}<span><i className = "fas fa-clock" style = {{color:"rgb(0, 162, 255)"}}></i>{reading.duration} minutes</span></p>
                      
                     );
                 })}
                 <h3>Graded: {props.Graded.title}</h3>
             </div>
         </div>
     );

} 

export default SyllabusWeekCard;