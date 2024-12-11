import React from "react";
import LoginForm from "../Components/LoginForm.js";

const Login = ({ setIsLoggedIn={setIsLoggedIn}})=> {
  return (
   <div>
      <LoginForm  setIsLoggedIn={setIsLoggedIn}/>
   </div>
  );
}

export default Login;
