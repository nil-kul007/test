import React from "react";
import Input from "../Components/Input";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="main_box">
        <div className="log_box">
          <div className="form-input">
            <h2 className="heading">Sign In</h2>
            <Input class="user" label="User Name" />
            <Input class="password" label="Password" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
