import React, { useState } from 'react';
import '../../Css/Admin_Employer.css';
import user from '../../Image/User.JPG';
import Nav from '../../../../Navbar/Nav';

export default function ResetLevel3() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]).{5,}$/;
    if (!passwordRegex.test(newPassword)) {
      alert(
        'New password must be at least 5 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match.');
      return;
    }

    // Form is valid, perform further actions here
    console.log('Form submitted successfully');
  };

  return (

    <div className="Admin_Main">
      <div className="AllContainer">
        <div className="admin_container">
          <div className="admin_body">
            <div className="admin_profile">
              <div className="user">
                <div className="backbutton">ResetLevel3</div>
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
                  <label htmlFor="oldPassword">Old Password</label>
                  <input
                    type="password"
                    name="oldPassword"
                    id="oldPassword"
                    value={oldPassword}
                    onChange={handleOldPasswordChange}
                  />
                </div>
                <div className="inputsection">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
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
                <div className="Reset">
                  <button>Reset</button>
                </div>
              </div>
            </form>
            <div className="copyright">
              <span>Developed by nirajan.</span>
            </div>

          </div>

        </div>

      </div>

    </div>


  )
}
