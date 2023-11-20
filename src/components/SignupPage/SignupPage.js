import React from 'react';
import HeaderDefault from '../Common/HeaderDefault/HeaderDefault';
import './SignupPage.css'; // Import your CSS file for styling

const SignupPage = () => {
  return (
    <div className="SignupPage">
      <HeaderDefault />
      <div className="signupCenter">
        <div className="signupContainer">
          <div className="rectangle">
            <div className="logo-signup"></div>
            <div className="text-welcome">Join HFClone</div>
            <div className="text-subtitle">Thank you and Enjoy</div>
            <div className="text">Email Address</div>
            <input type="text" className="inputField" />
            <div className="text">Password</div>
            <input type="password" className="inputField" />
            <button className="signupButton">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;