import React, { useEffect, useState,useRef } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch, Link} from 'react-router-dom'; //alias - Router
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import './App.css';
import NavBar from './components/NavBar';
import CourseCategories from './pages/CourseCategories';
import CourseList from "./pages/CourseList";
import CoursePage from './pages/CoursePage';
import courselist from "./courselist";
import CourseCard from './components/CourseCard';
import Home from './pages/Home';
import Footer from "./components/layout/Footer";
import AuthPage from "./pages/AuthPage";
import FullScreenOverlay from './components/FullScreenOverlay';
import AuthForm from './components/AuthForm';


import image from './images/slide2.jpg'
import DropdownCard from './components/layout/DropdownCards/DropdownCard'


function App() {
  const DropdownMenu = useRef()
  const [DropdownHover,setDropdownHover] = useState(false)
  const AllCourses = useRef()
  const StandardList = useRef()
  const CourseSingle = useRef()
  const UserDashboard = useRef()
  const Default = useRef()

  useEffect(()=>{
    if(DropdownHover){
      DropdownMenu.current.style.display = "flex"
    }
    if(!DropdownHover){
      DropdownMenu.current.style.display = "none"
    }
  },[DropdownHover])

  function toggleHover(){
    setDropdownHover(true)
  }

  function toggleHoverOnLeave(){
    setDropdownHover(false)
  }

  function MouseOverAllCourses(){
    AllCourses.current.style.display = "flex"
    Default.current.style.display = "none"
  }
  function MouseOverSingleCourses(){
    CourseSingle.current.style.display = "flex"
    Default.current.style.display = "none"
  }

  function MouseOverStandardCourses(){
    StandardList.current.style.display = "flex"
    Default.current.style.display = "none"
  }
  function MouseOverUserDashBorad(){
    UserDashboard.current.style.display = "flex"
    Default.current.style.display = "none"
  }

  function MouseLeaveAllCourses(){
    AllCourses.current.style.display = "none"
    Default.current.style.display = "flex"
    
  }

  function MouseLeaveSingleCourses(){
    CourseSingle.current.style.display = "none"
    Default.current.style.display = "flex"
    
  }
  function MouseLeaveUserDashBorad(){
    UserDashboard.current.style.display = "none"
    Default.current.style.display = "flex"
    
  }
  function MouseLeaveStandardCourses(){
    StandardList.current.style.display = "none"
    Default.current.style.display = "flex"
    
  }
  
  

  const [search, setSearch] = useState("");
  const [searchResult,setSearchResult] = useState();
  const [searchCategory, setSearchCategory] = useState();
  const [toggleActive,setToggleActive] = useState(false);
  const [loginActive,setLoginActive] = useState(false);
   function scrollToTop() { 
      window.scrollTo(0, 0);
     }
    function searchHandler(event){
      setSearch(event.target.value);
      setSearchResult(courselist.filter((course)=>course.title.toLowerCase().includes(search.toLowerCase())));
      if(searchResult && searchResult.length!==0){
        setSearchCategory(courselist.filter((course)=>(course.category === searchResult[0].category && searchResult[0].id !== course.id)));
      }
      console.log(searchResult);
      scrollToTop();
    }

    function searchIconClickHandler(){
      document.querySelector(".main-header .searchBar").focus();
  }
  
   function setSearchNull(){
     setSearch("");
     window.scrollTo(0, 0);
   }

   function toggleClickHandler(){
     setToggleActive(prev=>!prev);
   }

   function setToggleNull(){
     setToggleActive(false);
   }
  
   function loginClickHandler(){
     setSearch("");
     setLoginActive(prev=>!prev);

   }

   useEffect(()=>{
     if(loginActive){
       document.body.style.overflowY = "hidden";
     }else{
       document.body.style.overflowY = "scroll";
     }
   },[loginActive])
   
  return (
    <React.Fragment>
    <Router>
    {toggleActive && <div className = "mobile-menu">
    <CloseIcon className = "close-button" onClick = {toggleClickHandler}/>
    <ul>
              <li><Link to = "/" className = "nav-links" onClick = {setToggleNull}>Home</Link></li>
              <li><Link to = "/branches" className = "nav-links" onClick = {setToggleNull}>Courses</Link></li>
              <li><Link to = "/" className = "nav-links" onClick = {setToggleNull}>About us</Link></li>
              <li><Link to = "/" className = "nav-links" onClick = {setToggleNull}>Contact us</Link></li>
         </ul>
    </div>}
    {
      loginActive && 
      <div className = "login-section">
       <CloseIcon className = "close-button-login" onClick = {loginClickHandler}/>
       <div className = "login-section-form">
          <AuthForm />
       </div>
      </div>
    }
    {loginActive &&
    <FullScreenOverlay onClick = {loginClickHandler} color = "rgba(0,0,0,0.6)"/>}
    {toggleActive &&
    <FullScreenOverlay onClick = {toggleClickHandler}/>}
    <NavBar>
    <div className = "menu-toggle">
      <MenuIcon className = {`toggle-button ${toggleActive && "blue-theme-color"}`} onClick = {toggleClickHandler}/>
    </div>
    <div className = "nav-left-menu">
    <ul>
              <li><Link to = "/" className = "nav-links" onClick = {setSearchNull}>Home</Link></li>
              <li className="courses"><Link to = "/branches" onMouseEnter={toggleHover} className = "nav-links" onClick = {setSearchNull}>Courses</Link></li>
              <li><Link to = "/" className = "nav-links" onClick = {setSearchNull}>About us</Link></li>
              <li><Link to = "/" className = "nav-links" onClick = {setSearchNull}>Contact us</Link>
              </li>
         </ul>
    </div>
  <div className = "nav-right-menu">
       <input className = "searchBar" value = {search} onChange = {searchHandler} placeholder = "Search...."></input>
       <div className= "searchIcon" onClick = {searchIconClickHandler}>
              <SearchIcon />
       </div>
        <button className = "login-button" onClick = {loginClickHandler}>Login</button>
        </div>
    </NavBar>

{/*************************************Drop-Down Menu**************************************************/}
    <div onMouseLeave={toggleHoverOnLeave} ref={DropdownMenu} className="dropdown-courses">
                  <ul>
                    <li style={{color:"grey"}} >Features</li>
                    <li onMouseOver={MouseOverAllCourses} onMouseLeave={MouseLeaveAllCourses} >All Courses</li>
                    <li onMouseOver={MouseOverStandardCourses} onMouseLeave={MouseLeaveStandardCourses}>Standard List</li>
                    <li onMouseOver={MouseOverSingleCourses} onMouseLeave={MouseLeaveSingleCourses}>Course Single</li>
                    <li onMouseOver={MouseOverUserDashBorad} onMouseLeave={MouseLeaveUserDashBorad}>User Dashboard</li>
                  </ul>

                  <div ref={Default} className="dropdown-courses-card">
                  <DropdownCard image={image} title="Default" plan="Pro" price="$23"/>
                  <DropdownCard image={image} title="Default" plan="Pro" price="$23"/>
                  <DropdownCard image={image} title="Default" plan="Pro" price="$23"/>
                  </div>
                      

    
                      <div ref={AllCourses} style={{display:"none"}} className="dropdown-courses-card">
                      <DropdownCard image={image} title="All Courses" plan="Basic" price="$70"/>
                      <DropdownCard image={image} title="All Courses" plan="Basic" price="$70"/>
                      <DropdownCard image={image} title="All Courses" plan="Basic" price="$70"/>
                      </div>

                  
                    <div ref={StandardList} style={{display:"none"}} className="dropdown-courses-card">
                    <DropdownCard image={image} title="Standard Courses" plan="Basic+" price="$35"/>
                    <DropdownCard image={image} title="Standard Courses" plan="Basic+" price="$35"/>
                    <DropdownCard image={image} title="Standard Courses" plan="Basic+" price="$35"/>
                    </div>
                  

                      <div ref={CourseSingle} style={{display:"none"}} className="dropdown-courses-card">
                      <DropdownCard image={image} title="Single Courses" plan="Pro+" price="$200"/>
                      <DropdownCard image={image} title="Single Courses" plan="Pro+" price="$200"/>
                      <DropdownCard image={image} title="Single Courses" plan="Pro+" price="$200"/>
                      </div>
              
                    <div ref={UserDashboard} style={{display:"none"}} className="dropdown-courses-card">
                    <DropdownCard image={image} title="User Dashboard" plan="Mid Level+" price="$150"/>
                    <DropdownCard image={image} title="User Dashboard" plan="Mid Level+" price="$150"/>
                    <DropdownCard image={image} title="User Dashboard" plan="Mid Level+" price="$150"/>
                    </div>                 
      </div>




    { search.length !== 0 &&
      <div className = "course-cards-container">
               {searchResult.length === 0 && <h1>No Results found.<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></h1>}
                 {searchResult.map((course)=>{
                    return (
                       <CourseCard  
                         key = {course.id}
                         id = {course.id} 
                         title = {course.title} 
                         instructor = {course.instructor} 
                         about = {course.about} 
                         imgSrc = {course.imgSrc} 
                         onClick = {setSearchNull}/>
                     );
                    })}
                   {searchResult.length!==0 &&
                     
                     <h1>You may also like</h1>}
                    { searchResult.length !== 0 && searchCategory &&  searchCategory.map((course)=>{
                        return(
                          <CourseCard  
                         key = {course.id}
                         id = {course.id} 
                         title = {course.title} 
                         instructor = {course.instructor} 
                         about = {course.about} 
                         imgSrc = {course.imgSrc} 
                         onClick = {setSearchNull}/>
                        );
                     })
                    }
                    
            </div>
    }
    {search.length === 0 &&
       <Switch>
         <Route path = "/" exact>
           <Home />
         </Route>
         <Route path = "/branches" exact>
            <CourseCategories />
         </Route>
         <Route path = "/auth" exact>
            <AuthPage />
         </Route>
         <Route path = "/:catId" exact>
              <CourseList />
         </Route>
         <Route path = "/courses/:courseId" exact>
             <CoursePage />
         </Route>         
         <Redirect to = "/"/>
       </Switch>} 
       <Footer />
    </Router>
    </React.Fragment>
  
  );

  }

export default App;
