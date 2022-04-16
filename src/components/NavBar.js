/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo1 from "../images/room.png"
import { Link } from "react-router-dom";
import "../Style/index.css"
const NavBar = () => {
  return (
    <>
       <div class ="nav">
       <img class="logo1" src={logo1}/>
         <input type="checkbox" id="click"/>
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
         <ul>
            <li><Link class="active" to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/login" class="btn btn-secondary ">Login</Link></li>
            <li><Link to="/signup" class="btn btn-secondary">Signup</Link></li>
         </ul>
      </div>
</>
  );
};
export default NavBar;
