import React from 'react';
import './HeaderProfile.css'; // Import CSS for styling

const HeaderProfile = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src='hfclone\public\logo192.png' alt="Logo" />
      </div>
      <div className="title">
        <button>HFClone</button>
      </div>
      <div className="search-bar-long">
        <input type="text" placeholder="Search" />
      </div>
      <div className="profile-logo">
        <img src='hfclone\public\logo192.png' alt="Logo" />
      </div>
    </header>
  );
};

export default HeaderProfile;
