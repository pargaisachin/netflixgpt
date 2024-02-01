import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return <div className=" h-full w-full flex justify-center items-center  "> 
    <Header/>
    <img className="h-screen w-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
    <LoginForm/>
    


  </div>;
};

export default Login;
