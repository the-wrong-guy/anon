import React, { useState } from "react";
import axios from "axios";

import "./AuthForm.css";
import Input from "../components/Input";
import { useHistory } from "react-router-dom";
function AuthForm(){
   
    const history = useHistory();

    const [isLoginMode,setIsLoginMode] = useState(true);

    const [FirstName,setFirstName] = useState("");
    const [LastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");

    
    async function submitHandler(event){
        event.preventDefault();
        
        if(isLoginMode){
        try{
        const response = await 
        axios({
          method: 'post',
          url: 'http://localhost:5000/api/users/login',
          data: {
            email,
            password:event.target.password.value
          }
        });
        alert(response.data+"");
        history.push("/");
      }catch(err){
          console.log(err);
      }
    }else{
        try{
            const response = await 
            axios({
              method: 'post',
              url: 'http://localhost:5000/api/users/signup',
              data: {
                FirstName,
                LastName,  
                email,
                password:event.target.password.value,
                userType:"student"
              }
            });
            alert("signup successful now login");
            console.log(response);
            history.push("/");
          }catch(err){
              console.log(err);
          }
    } 

    }

    function clickHandler(){
        setIsLoginMode(prev=>!prev);
    }

    function inputChangeHandler(event){
        let name = event.target.name;
        if(name === "email"){
            setEmail(event.target.value);
        }else if(name === "FirstName"){
            setFirstName(event.target.value);
        }else if(name === "Phone"){
            setMobile(event.target.value);
        }else{
            setLastName(event.target.value);
    }

  }

    return (
        <form className = "auth-form" onSubmit = {submitHandler}>
        <h1>{isLoginMode && "Login"}{!isLoginMode && "Sign Up"}</h1>
        {!isLoginMode && <Input name = "FirstName" type = "text" placeholder = "Required*" label = "First Name" value = {FirstName} onChange = {inputChangeHandler}/>}
        {!isLoginMode && <Input name = "LastName" type = "text" placeholder = "Required*" label = "Last Name" value = {LastName} onChange = {inputChangeHandler}/>}
        <Input name = "Phone" type = "tel" placeholder = "9534189897" label = "Mobile Number" value = {mobile} onChange = {inputChangeHandler}/>
        <Input name = "email" type = "email" placeholder = "martin122@gmail.com" label = "Email Id" value = {email} onChange = {inputChangeHandler}/>
        <Input name = "password" type = "password" placeholder = "Enter Your Password (min 6 characters)" label = "Password"/>
        <div className = "button-container">
        <p>{isLoginMode && "Dont't"} {!isLoginMode && "Already"} have an account? <span onClick = {clickHandler} className = "login-signup-link">{isLoginMode && "Sign Up"}{!isLoginMode && "Login"}</span></p>
        <button className = "form-button" type = "submit">{isLoginMode &&"Login"}{!isLoginMode && "Sign Up"}</button>
        </div>
        </form>      
    );


}

export default AuthForm;