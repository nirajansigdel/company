import React, { useState } from "react";
import "../Login/login.css";
import login from "../Login/Login.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Registration() {
  const [getemail, setemail] = useState();
  const [getusername, setusername] = useState();
  const [getpassword, setpassword] = useState();
  const [getlogged, setlogged] = useState(false);

  const applyregistration = async () => {
    try {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(getemail)) {
        alert("Invalid email format.");
        return;
      }
      // Username validation
      const userregex = /^[a-zA-Z]{3,32}$/;
      if (!userregex.test(getusername)) {
        alert("username length should  between 3-25 with only string");
        return;
      }

      // Password validation
      const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*\W)(?!.*\s).*$/;
      if (!passwordRegex.test(getpassword)) {
        alert(
          "Password should contain at least one digit, one uppercase letter, and one special character."
        );
        return;
      }

      const reslogin = await axios.post("http://localhost:4000/api/register", {
        email: getemail,
        username: getusername,
        password: getpassword,
      });
      console.log(getemail, getpassword, getpassword);

      if (reslogin.status === 200) {
        setlogged(true);
      }
    } catch (error) {
      console.log("registration error");
    }
  };

  if (getlogged) {
    window.location.href = "/login";
  }

  return (
    <div className="Main">
      <div className="Container">
        <div className="login_body">
          <div className="login">
            <h2>LOGIN </h2>
            <div className="imageportion">
              <img src={login} alt="image" />
            </div>
          </div>
          <form>
            <div className="inputsection">
              <label htmlFor="email">Email</label>
              <input
                type=""
                name="email"
                value={getemail}
                onChange={(e) => setemail(e.target.value)}
                autocomplete="off"
              />
            </div>
            <div className="inputsection">
              <label htmlFor="name">Username</label>
              <input
                type=""
                name="name"
                value={getusername}
                onChange={(e) => setusername(e.target.value)}
                autocomplete="off"
              />
            </div>
            <div className="inputsection">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={getpassword}
                onChange={(e) => setpassword(e.target.value)}
                autocomplete="off"
              />
            </div>
            <div className="inputsection">
              <button type="button" onClick={applyregistration}>
                Registration
              </button>
            </div>
            <Link to="/login">Login</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
