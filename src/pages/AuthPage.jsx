import React from "react";

import "./AuthPage.css";
import AuthForm from "../components/AuthForm";

export default function AuthPage(props){
   

    return (
        <div className = {`auth-form-page ${props.className}`}>
           <AuthForm />
        </div>
    );


}