import React, { useState } from 'react';
import user from '../../Image/User.JPG'
import { Link } from 'react-router-dom';

function Level2() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Username validation
    const usernameRegex = /^(?:\d{10}|[a-zA-Z]+[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,})$/;
    if (!usernameRegex.test(username)) {
      alert('Username must be a valid 10-digit phone number or a valid email address.');
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Form is valid, perform further actions here
    console.log('Form submitted successfully');
  };

  return (
            <div className="admin_container">
              <div className="admin_body">
                <div className="admin_profile">
                  <div className="user">
                    <div className="backbutton">
                      level2
                    </div>

                    <div className="userdescription">
                      <div className="userimage">
                        <img src={user} alt="image" />
                      </div>
                      <span>Nirajan sigdel</span>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input_body">
                    <div className="inputsection">
                      <label htmlFor="name">Email/Phone</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </div>
                    <div className="inputsection">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <div className="inputsection">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                    </div>
                  </div>
                  <div className="buttonportation">
                    <div className="Set_Password">
                      <button>Set Password</button>
                    </div>
                                    <Link to='/reset' className="Reset">
                                        <button>Reset</button>
                                    </Link>
                                </div>
                                <div className="copyright">
                                    <span>Developed by nirajan.</span>
                                </div>
                            </form>

                        </div>

                    </div>



      



)
}

export default Level2;
