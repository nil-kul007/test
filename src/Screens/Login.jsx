import React from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import "./Login.css";

const Login = () => {
    const LoginHandler = () => {
        return
    }
    const RegisterHandler = () => {
        return
    }
  return (
    <>
      <div className="main_box">
        <div className="log_box">
          <h2 className="Heading">Sign In</h2>
          <div className="form-input">
            <Input class="user" label="User Name" />
            <Input class="password" label="Password" />
          </div>
          <div className="btn-box">
            <Button class="login-styl" name="Login" onClick={LoginHandler}/>
            <Button class="regi-styl" name="Register" onClick={RegisterHandler} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
