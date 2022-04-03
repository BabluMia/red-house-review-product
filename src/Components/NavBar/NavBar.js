import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="container-fluid " style={{background:'radial-gradient(#fff,#ffd6d6)'}}>
      <div className="row container w-md-75 w-100 mx-auto d-flex align-items-center py-4 px-5">
        <div className="col-5 d-none d-xl-block">
          <h2>Red House</h2>
        </div>
        <div className="col-xl-6 col-12 ms-3 text-xl-cnter text-xxl-end fw-bold ">
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/reviews">Reviews</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/blog">Blog</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/dashbord">Dashbord</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
