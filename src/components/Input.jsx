import React from "react";

import "./Input.css";

function Input(props){
   
    return (
      
        <React.Fragment>
            <label className = "input-label">{props.label}</label><br />
            {props.type !== "password" && 
            <input 
            className = "form-input" 
            type = {props.type} 
            name = {props.name} 
            placeholder = {props.placeholder} 
            value = {props.value||""} 
            onChange = {props.onChange}/>
            }
            {props.type === "password" && 
            <input 
            className = "form-input" 
            type = {props.type} 
            name = {props.name} 
            placeholder = {props.placeholder} 
            />
            }
            <br />
        </React.Fragment>

    );

}

export default Input;