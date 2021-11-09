import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../Context/context";
import { useHistory } from "react-router-dom";

const LoginModel = () => {
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = () => {
    axios
      .post("https://api-erpadmin.jmmtest.xyz/api/Authentication", {
        UserName: "admin",
        password: "admin123",
      })
      .then((res) => {
        console.log("res", res);
        login(res);
        history.push("/dashboard");
        //relaod clears the state user and token of context provider
        window.location.reload();
      });
  };

  return (
    <React.Fragment>
      <div id="loginModal" className="modal">
        <div className="modal-content">
          <span className="close-model btn btn-sm text-end bg-dark text-light">
            &times;
          </span>
          <div className="login-layout">
            <img src="images/logo.png" alt="" />
            <h2>Login</h2>
            <p>To submit a photo, login</p>
            <button type="button" name="button" className="login-facebook-btn">
              <i className="bi bi-facebook iconFb"></i>Login with Facebook
            </button>
            <br />
            <p>OR</p>
            <form
              className="login-model-form"
              action="index.html"
              method="post"
            >
              <label htmlFor="">Email</label>
              <br />
              <input type="email" name="" required />
              <br />
              <label htmlFor="">
                Password <a href="#">Forgot your password?</a>{" "}
              </label>
              <br />
              <input type="password" name="" required />
              <br />
              <button
                type="submit"
                name="button"
                className="login-submit-btn"
                onClick={handleLogin}
              >
                Login
              </button>
              <p>
                Don't have an account? <Link to="/sign-up">Join</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginModel;
