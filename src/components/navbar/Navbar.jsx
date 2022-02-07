import React from "react";
import "./navbar.css";
import avatar from "../../assets/img/avatar.png";

const Menu = () => (
  <>
    <p>
      <a href="#trips">trips</a>
    </p>
    <p>
      <a href="#recentlyviewed">recently viewed</a>
    </p>
    <p>
      <a href="#bokings">bookings</a>
    </p>
  </>
);

const Navbar = () => {
  return (
    <>
      <div className="nck__navbar">
        <div className="nck__navbar-links">
          <div className="nck__navbar-links-container">
            <Menu />
          </div>
          <div className="nck__navbar-links-profile">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
