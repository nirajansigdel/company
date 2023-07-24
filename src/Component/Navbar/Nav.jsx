import React from "react";
import "./Nav.css";
import User from "./User.JPG";
import {
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Nav() {
  const confirmlogout=()=>{
   const shouldlogout=window.confirm("Do you want to logout?")
   if(shouldlogout){
    window.location.href="/login"
   }
  }
  return (
    <div className="navbar">
      <div className="logo">
        <h1>R.D.S</h1>
      </div>
      <div className="navitem">
        <ul>
          <li>
            <Link to="/home" className="link-class">
              Home
            </Link>
          </li>
          <li>
            <Link to="/user" className="link-class">
              User
            
            </Link>
          </li>
          <li>
            <Link to="/organization" className="link-class">
              Organization
          
            </Link>
          </li>
          <li>
            <Link to="/darta" className="link-class">
              Darta
              
            </Link>
          </li>
          <li>
            <Link to="/chalani" className="link-class">
              Chalani
            
            </Link>
          </li>
          <li>
            <Link to="/storage" className="link-class">
              Storage
             
            </Link>
          </li>
          <li>
            <Link to="./" className="link-class">
              Report
            </Link>
          </li>
          <li>
            <Link to="./" className="link-class">
              Other

            </Link>
          </li>
        </ul>
      </div>
      <div className="user_menu">
        <div className="user">
        <div className="image_user">
            <div className="image">
              <img src={User} alt="" />
            </div>
            <div className="user">
              <h4>User name</h4>
            </div>
            <div className="menu_icon">
            <FaArrowAltCircleRight className="arrowicon" onClick={confirmlogout} />
        </div>
          </div>
          <div className="admin">
            <a href="#">admin</a>
             Log in
          </div>
        </div>
        
          <div className="logout">
            <span onClick={confirmlogout} >Log Out</span>
          </div>

        </div>
       
      </div>
  );
}
