import React, { Component } from "react";

const DropDownNavbar = () => {

  const dropdown = () => {
    console.log("run");
    document.getElementById("myDropdown").style.display = "block";
  };

  return (
    <React.Fragment>
      <div className="dropdown  dropbtn">
        <button className="btn"  onClick={dropdown}>
          <i className="abc bi bi-list"></i>
        </button>

        <div id="myDropdown" className="dropdown-content">
          <div className="dropdown-content-flex">
            <div className="flex-col">
              <ul>
                <div className="">
                  <h4>
                    <span>
                      <i className="bi bi-briefcase"></i>
                    </span>{" "}
                    Company
                  </h4>
                </div>
                <li>
                  <a href="#">About</a>{" "}
                </li>
                <li>
                  <a href="#">Brand</a>{" "}
                </li>
                <li>
                  <a href="#">Blog</a>{" "}
                </li>
                <li>
                  <a href="#">History</a>{" "}
                </li>
                <li>
                  <a href="#">Join the Team</a>{" "}
                </li>
                <li>
                  <a href="#">Press</a>{" "}
                </li>
                <li>
                  <a href="#">Contact Us</a>{" "}
                </li>
                <li>
                  <a href="#">Help</a>{" "}
                </li>
              </ul>
            </div>
            <div className="flex-col">
              <div className="">
                <h4>
                  <span>
                    <i className="bi bi-bounding-box"></i>
                  </span>{" "}
                  Product
                </h4>
              </div>
              <ul>
                <li>
                  <a href="#">Explore</a>{" "}
                </li>
                <li>
                  <a href="#">Develpers/Api</a>{" "}
                </li>
                <li>
                  <a href="#">Unsplash Dataset</a>{" "}
                </li>
                <li>
                  <a href="#">Unsplash for IOS</a>{" "}
                </li>
                <li>
                  <a href="#">Apps and Plugins</a>{" "}
                </li>
              </ul>
            </div>
            <div className="flex-col">
              <div className="">
                <h4>
                  <span>
                    <i className="bi bi-people-fill"></i>
                  </span>{" "}
                  Community
                </h4>
              </div>
              <ul>
                <li>
                  <a href="#">Become a Contributer</a>{" "}
                </li>
                <li>
                  <a href="#">Topics</a>{" "}
                </li>
                <li>
                  <a href="#">Collections</a>{" "}
                </li>
                <li>
                  <a href="#">Trends</a>{" "}
                </li>
                <li>
                  <a href="#">Unsplash Awards</a>{" "}
                </li>
                <li>
                  <a href="#">Stats</a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="flex dropdown-bottomBar">
            <div className="dropdown-bottom-bar">
              <ul className="">
                <li>
                  {" "}
                  <a href="#">License</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
            <div className="social-icons">
              <ul className="">
                <li>
                  <i className="bi bi-twitter"></i>
                </li>
                <li>
                  <i className="bi bi-facebook"></i>
                </li>
                <li>
                  <i className="bi bi-instagram"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DropDownNavbar;
