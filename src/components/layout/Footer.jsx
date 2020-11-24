
import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  
  function scrollToTop(){
    window.scrollTo(0,0);
  }


  return (<div className = "footer">
   <Grid container>
    <Grid item xs = {12} md = {3} className = "footer-col">
    <span className = "header-logo">
          <span style = {{color:"#008fdf"}}>Get2</span>
          <span style = {{color:"#fee500"}}>Learn</span>
          </span>
          <br />
          <br />
          <Link to= "/" onClick = {scrollToTop}>Get2Learn.in</Link><br /><br />
          <i className="fa fa-facebook social" aria-hidden="true"></i> 
          <i className="fa fa-twitter social" aria-hidden="true"></i> 
          <i className="fa fa-google social" aria-hidden="true"></i> 
          <i className="fa fa-linkedin social" aria-hidden="true"></i>     
    </Grid>
    <Grid item xs = {12} md = {3} className = "footer-col">
      <h3 style = {{margin:"6px 6px 6px 0"}}>Courses</h3><br />
       <Link to = "/cat1" onClick = {scrollToTop}>Computer Science Engineering</Link><br /><br />
       <Link to = "/cat2" onClick = {scrollToTop}>Information Technology</Link><br /><br />
       <Link to = "/cat3" onClick = {scrollToTop}>Electronics and Communication Engineering</Link><br /><br />
       <Link to = "/cat4" onClick = {scrollToTop}>Mechanical Engineering</Link><br /><br />
       <Link to = "/cat5" onClick = {scrollToTop}>Civil Engineering</Link><br /><br />
       <Link to = "/cat6" onClick = {scrollToTop}>Language Courses</Link><br /><br />
    </Grid>
    <Grid item xs = {12} md = {3} className = "footer-col">
      <h3 style = {{margin:"6px 6px 6px 0"}}>Others</h3><br />
       <Link to = "/cat1" onClick = {scrollToTop}>Books</Link><br /><br />
       <Link to = "/cat2" onClick = {scrollToTop}>Notes</Link><br /><br />
       <Link to = "/cat3" onClick = {scrollToTop}>Video Lectures</Link><br /><br />
       <Link to = "/cat4" onClick = {scrollToTop}>Sample Papers</Link><br /><br />
       </Grid>
    <Grid item xs = {12} md = {3} className = "footer-col">
       <h3 style = {{margin:"6px 6px 6px 0"}}>Contact</h3><br />
       <Link to = "/cat1" onClick = {scrollToTop}>Help Center</Link><br /><br />
       <Link to = "/cat2" onClick = {scrollToTop}>Support Community</Link><br /><br />
       <Link to = "/cat3" onClick = {scrollToTop}>E-mail</Link><br /><br />
       <Link to = "/cat4" onClick = {scrollToTop}>Whatsapp</Link><br /><br />
    </Grid>
   </Grid>
  </div>)
}

export default Footer;
