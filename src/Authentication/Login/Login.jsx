import React, { useState } from "react";
import "./login.css";
import login from "./Login.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [getusername, setusername] = useState();//to get username
  const [getpassword, setpassword] = useState();//to get password
  const [getlogged, setlogged] = useState(false);//for login

  const applylogin = async () => {
    try {
      const reslogin = await axios.post("http://localhost:4000/api/login", {
        username: getusername,
        password: getpassword,
      });

      const responsedata = reslogin.data;

      if (reslogin.status === 200) {
        setlogged(true);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  if (getlogged) {
    window.location.href = "/home";
  }

  return (
    // main has (conatiner) ,container has (login_body) ,login_body has (login,image portion ,form )
    <div className="Main">
      <div className="Container">
        <div className="login_body">
          <div className="login">
            <h2>LOGIN </h2>

            {/* input filed for username and password */}
            <div className="imageportion">
              <img src={login} alt="image" />
            </div>
          </div>
          <form>
            <div className="inputsection">
              <label htmlFor="name">Username</label>
              <input
                type=""
                name="name"
                value={getusername}
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div className="inputsection">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={getpassword}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            {/* =================login button======================= */}
            <div className="inputsection">
              <button type="button" onClick={applylogin}>
                Login
              </button>
            </div>

            {/* ====================== forget button======================= */}
            <Link>Forget Password</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
