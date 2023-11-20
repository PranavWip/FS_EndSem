import React from 'react';
import HeaderProfile from '../Common/HeaderProfile/HeaderProfile';
import './EditProfilePage.css';

const EditProfilePage = () => {
  return (
    <div className="EditProfilePage">
      <HeaderProfile />
      <div className="twoColumns">
        {/* Left Column */}
        <div className="leftColumn">
          {/* Circular Profile Logo */}
          <div className="circularProfileLogo">
            {/* Replace 'image_source' with your image URL */}
            <img src="image_source" alt="Profile Logo" />
          </div>
          {/* User Info */}
          <div className="userInfo">
            <p>Username</p>
            <p>Handle</p>
            <p>User ID</p>
          </div>
        </div>
        {/* Right Column */}
        <div className="rightColumn">
          <h2>Edit Profile</h2>
          <div className="editFields">
            {/* Username Input */}
            <div className="inputField">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" placeholder="Enter Username" />
            </div>
            {/* Handle Input */}
            <div className="inputField">
              <label htmlFor="handle">Handle:</label>
              <input type="text" id="handle" placeholder="Enter Handle" />
            </div>
            {/* Personal Info Input */}
            <div className="inputField">
              <label htmlFor="personalInfo">Personal Info:</label>
              <textarea id="personalInfo" placeholder="Enter Personal Info"></textarea>
            </div>
            {/* Upload Photo and Save Buttons */}
            <div className="buttonRow">
              <button className="uploadButton">Upload Photo</button>
              <button className="saveButton">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
