import React from 'react';
import HeaderDefault from '../Common/HeaderDefault/HeaderDefault';
import './LoginPage.css'; // Import your CSS file for styling

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <HeaderDefault />
      <div className="loginCenter">
        <div className="loginContainer">
          <div className="rectangle">
            <div className="logo-login"></div>
            <div className="text-welcome">Welcome</div>
            <div className="text-subtitle">Do you have an account or <u>first time?</u></div>
            <div className="text">Username</div>
            <input type="text" className="inputField" />
            <div className="text">Password</div>
            <input type="password" className="inputField" />
            <button className="loginButton">Login</button>
            <div className="forgotPassword">
              <u>Forgot Password?</u>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
