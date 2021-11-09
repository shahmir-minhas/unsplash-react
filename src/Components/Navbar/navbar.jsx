import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropDownNavbar from "../DropDown/dropdown-navbar";
import InputNavbar from "../input-navbar/input-navbar";
import LoginModel from "../Modals/loginModal";

const Navbar = () => {

const handleLoginModel = () =>{

    var modal = document.getElementById("loginModal");
    
    var span = document.getElementsByClassName("close-model")[0];
  
    modal.style.display = "block";
  
    console.log("run");
    span.onclick = function() {
    modal.style.display = "none";
    }
};

  return (
    <nav>
      <ul>
        <li>
        <Link to="/">
        <img src="images/logo-unsplash.png" alt="logo" className="logo" />
        </Link>
          
        </li>
        <li>
        <InputNavbar/>
        </li>
        <li className="top-margin-10">
          <Link className="nav-link" to="/brands">
            Brands
          </Link>
        </li>
        <li className="top-margin-10">
          <Link className="nav-link" to="/awards">
            <span>&#127942; </span> Unsplash Awards
          </Link>
        </li>
        <li className="top-margin-10">
          <div className="vl">
            <button className="btn nav-link" id="login-btn" onClick={handleLoginModel}>
              Login
            </button>
            <LoginModel/>
          </div>
        </li>
        <li className="">
        <Link to="/sign-up">
        <button type="button" name="button" className="btn">
            Submit a Photo
          </button>
        </Link>
          
        </li>
        <li className="top-margin-10">
          <DropDownNavbar/>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
