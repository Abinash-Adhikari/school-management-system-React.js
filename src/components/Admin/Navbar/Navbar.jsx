import React from "react";
import "./Navbar.css";
import Avatar from "../photos/avatar.jpg";
export default function Navbar() {
  var schoolName = "Mind Light English Boarding School";
  return (
    <div>
      <div classNames="topBar">
        <div className="top">
          <div className="full-name">
            <h1 className="image-text mt-3">
              <strong>{schoolName}</strong>
            </h1>
          </div>
          <div className="others">
            <div className="other-name mt-3">
              <h5>Abinash Adhikari</h5>
              <p className="text-center">Admin</p>
            </div>
            <div className="other-image mt-3">
              <img src={Avatar} alt="" />
            </div>
            <div className="other-message mt-3">
              <i className="far fa-envelope">
                <sup className="text-danger">10</sup>
              </i>
            </div>
            <div className="other-notification mt-3">
              <i className="far fa-bell">
                <sup className="text-danger">12</sup>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
