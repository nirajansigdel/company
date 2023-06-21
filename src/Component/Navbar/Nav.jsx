import React from "react";
import "./Nav.css";
import User from "./User.JPG";
import {
  FaBuilding,
  FaFileArchive,
  FaHome,
  FaPaperPlane,
  FaStoreAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>R.D.S</h1>
      </div>
      <div className="navitem">
        <ul>
          <li>
            <Link to="/">
              Home{" "}
              <div className="iconss">
                <FaHome />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/user">
              User
              <div className="iconss">
                <FaUser />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/organization">
              Organization
              <div className="iconss">
                <FaBuilding />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/darta">
              Darta
              <div className="iconss">
                <FaFileArchive />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/chalani">
              Chalani
              <div className="iconss">
                <FaFileArchive />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/storage">
              Storage
              <div className="iconss">
                <FaStoreAlt />
              </div>
            </Link>
          </li>
          <li>
            <Link to="./">
              Report
              <div className="iconss">
                <FaStoreAlt />
              </div>
            </Link>
          </li>
          <li>
            <Link to="./">
              Other
              <div className="iconss">
                <FaFileArchive />
              </div>
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
          </div>
          <div className="admin">
            Logged in as an <a href="">admin</a>
          </div>
        </div>
        <div className="menu_icon">
          <Link to="/login">
            {" "}
            <FaStoreAlt />
          </Link>
        </div>
      </div>
    </div>
  );
}
