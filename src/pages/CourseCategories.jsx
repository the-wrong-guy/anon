import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

import "./CourseCategories.css";
import courseCategories from "../courseCategories";



const useStyles = makeStyles((theme) => ({ 
    paper: {
      textAlign:"left",  
      margin:"20px",
    },
    gridItem:{
      textAlign:"center",  
    }
  }));

function CourseCategories(props){

    
    
    function scrollToTop(){
        window.scrollTo(0,0);
    }

    const classes = useStyles();
 
    return (
  <React.Fragment className = {`${props.className}`}>
    <div className = "course-category-page-heading">
         <h1>Branches</h1>
         <p>Choose your branch</p>
    </div>
    <div className = "course-page-breadcrum"><h3 style = {{margin:0}}><Link to = "/" className = "course-page-breadcrum-links">Home</Link>/<Link to = "/branches" className = "course-page-breadcrum-links">Branch</Link></h3></div>

     
    <div className = "course-category-page-main-container">
        <Grid container spacing={1}>
        {courseCategories.map((category)=>{
            return (
              <React.Fragment key = {category.id}>
              <Grid item xs={12} md = {6} lg = {4} className = {classes.gridItem}>
                  <Paper className = {`${classes.paper} category-card`}>
                  <img className = "category-img"src = {category.imgSrc} alt = {category.name} ></img>
                  <div className = "category-info-section">
                    <h3 style = {{margin:0,fontSize:"18px"}}>{category.displayName}</h3>
                    <p style = {{textAlign:"justify",color:"rgb(150,150,150)"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed sed. Libero enim sed faucibus turpis. </p>
                    <Link to ={`/${category.id}`} onClick = {scrollToTop}><button className = "learn-more-button">Learn More</button></Link>
                  </div>
                  </Paper> 
                  </Grid>
              </React.Fragment>    
            );
        })}
      </Grid>

    </div>
    </React.Fragment> 
    );
}

export default CourseCategories;