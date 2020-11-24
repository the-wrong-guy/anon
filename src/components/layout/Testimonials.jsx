import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React, { useEffect, useState } from "react";

import "./Testimonial.css";

export default function Testimonials(){

  const testimonialArr = [
    {img:"https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg",
     name:"Edwig Houston",
     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {img:"https://2.bp.blogspot.com/-o9HT977jz-Y/U7AsAMQKrFI/AAAAAAAABSQ/jqsSrmCF49U/s1600/IMG_5108.jpg",
     name:"Mariana Denova",
     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {img:"https://c.files.bbci.co.uk/191E/production/_85303460_85303459.jpg",
     name:"George Matthew",
     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ]

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
      
  
       
       

    <div className = "carousel testimonial-carousel">
    <div className = "arrow-container-left">
       <ArrowBackIosIcon className = "forward-slide" onClick = {previousSlide} style = {{fontSize:"4rem",margin:"10px"}}/>
     </div>
     <div className = "arrow-container-right">
       <ArrowForwardIosIcon className = "previous-slide" onClick = {forwardSlide} style = {{fontSize:"4rem",margin:"10px"}}/>
     </div> 
     <div className = "testimonial">
     <div className = "tst-overlay"><h1 className = "testimonial-heading">Testimonials</h1></div>
     {index%3 === 0 &&    
        <React.Fragment>
          <div className = "testimonial-item">
          <img src = {testimonialArr[0].img} alt = "testimonial"/>
          <p className = "testimonial-name">{testimonialArr[0].name}</p>
          <p className = "testimonial-content">{testimonialArr[0].content}</p>  
          </div>      
        </React.Fragment>
        }
        {index%3 === 1 &&    
          <React.Fragment>
          <div className = "testimonial-item">
           <img src = {testimonialArr[1].img} alt = "testimonial"/>
           <p className = "testimonial-name">{testimonialArr[1].name}</p>
           <p className = "testimonial-content">{testimonialArr[1].content}</p>
           </div>
          </React.Fragment>
        }
        {index%3 === 2 && 
          <React.Fragment>   
          <div className = "testimonial-item">
             <img src = {testimonialArr[2].img} alt = "testimonial"/>
             <p className = "testimonial-name">{testimonialArr[2].name}</p>
             <p className = "testimonial-content">{testimonialArr[2].content}</p>
          </div>  
          </React.Fragment>
        }
        </div>
     </div>
    
   );
  
}