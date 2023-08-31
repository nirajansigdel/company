import React from "react";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

export default function Nav() {
  const location = useLocation(); 
  const confirmlogout = () => {
    const shouldlogout = window.confirm("Do you want to logout?")
    if (shouldlogout) {
      window.location.href = "/login"
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
            <Link to="/home" className={`link-class ${location.pathname === "/home" ? "active" : ""}`}>
              Home
            </Link>
          </li>
         
          <li>
            <Link to="/organization" className={`link-class ${location.pathname === "/organization" ? "active" : ""}`}>
              Organization
            </Link>
          </li>

          <li>
          <Link to="/darta" className={`link-class ${location.pathname === "/darta" ? "active" : ""}`}>
              Darta
            </Link>
          </li>
          <li>
          <Link to="/chalani" className={`link-class ${location.pathname === "/chalani" ? "active" : ""}`}>
              Chalani
            </Link>
           
          </li>
          <li>
          <Link to="/storage" className={`link-class ${location.pathname === "/storage" ? "active" : ""}`}>
            Storage
            </Link>
          </li>
          <li>
            <Link to="./" className="link-class">
              Report
            </Link>
          </li>
          <li>
            <Link to="/user" className={`link-class ${location.pathname === "/user" ? "active" : ""}`}>
              User
            </Link>
          </li>
          <li>
            <Link to="./" className="link-class">
              Other

            </Link>
          </li>
        </ul>
      </div>
      <div className="logout_admin">
         <FaUserAlt className="logout" onClick={confirmlogout}/>
         <h4>Admin</h4>
        </div>
      </div>
  );
}
