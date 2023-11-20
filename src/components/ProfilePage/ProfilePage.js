import React from 'react';
import HeaderProfile from '../Common/HeaderProfile/HeaderProfile';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="ProfilePage">
      <HeaderProfile />
      <div className="twoColumns">
        {/* Left Column */}
        <div className="leftColumn">
          <div className="profileInfo">
            {/* Circular Profile Logo */}
            <div className="circularProfileLogo">
              {/* Replace 'image_source' with your image URL */}
              <img src="image_source" alt="Profile Logo" />
            </div>
            {/* Username */}
            <p className="username">Username</p>
            {/* User ID/Handle */}
            <p className="userId">UserID/Handle</p>
            {/* Edit Profile Button */}
            <button className="editProfileButton">Edit Profile</button>
            {/* Rectangle for Personal Information */}
            <div className="personalInfoRectangle">
              {/* Personal Information */}
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="rightColumn">
          <div className="userModelsRectangle">
            {/* User Models */}
          </div>
          <div className="userChatsRectangle">
            {/* User Chats */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
