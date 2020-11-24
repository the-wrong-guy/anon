import React, {useEffect, useState } from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import "./Carousel.css";
 
const slidearray = [{
  img:slide1,
  heading1:"Prepare for the Future",
  heading2:"Educate. Being smart is great"
},
{
  img:slide2,
  heading1:"Leaders in Learning",
  heading2:"Empowering children to reach their potential"
},
{
  img:slide3,
  heading1:"Start Your Classes Now",
  heading2:"Extend Your Knowledgebase."
}
]


function AutoCarousel(){

  const [index,setIndex] = useState(0);

  function previousSlide(){
    setIndex(prev=>prev-1);
  }
  function forwardSlide(){
    setIndex(prev=>prev+1);
  }

  useEffect(()=>{
    const timer = setInterval(()=>{
      setIndex(index+1);
    },7000);
    
    //clearing setInterval

    return ()=>clearInterval(timer);

  },[index]);


  return (
    <div className = "carousel black-bg">
    <div className = "arrow-container-left">
       <ArrowBackIosIcon className = "forward-slide" onClick = {previousSlide} style = {{fontSize:"4rem",margin:"10px"}}/>
     </div>
     <div className = "arrow-container-right">
       <ArrowForwardIosIcon className = "previous-slide" onClick = {forwardSlide} style = {{fontSize:"4rem",margin:"10px"}}/>
     </div>  
        {index%3 === 0 &&    
        <div className = "carousel-item-1">
          <div className = "headings-container">
          <p className = "heading1">{slidearray[0].heading1}</p>
          <p className = "heading2">{slidearray[0].heading2}</p>
          </div>
        </div>
        }
        {index%3 === 1 &&    
        <div className = "carousel-item-2">
         <div className = "headings-container">
          <p className = "heading1">{slidearray[1].heading1}</p>
          <p className = "heading2">{slidearray[1].heading2}</p>
          </div>
        </div>
        }
        {index%3 === 2 &&    
        <div className = "carousel-item-3">
        <div className = "headings-container">
          <p className = "heading1">{slidearray[2].heading1}</p>
          <p className = "heading2">{slidearray[2].heading2}</p>
        </div>  
        </div>
        }
    </div>
   );

}


export default AutoCarousel;