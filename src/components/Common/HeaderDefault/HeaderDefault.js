import React from 'react';
import './HeaderDefault.css'; // Import CSS for styling

const HeaderDefault = () => {
  return (
    <header className="header">
      <div className="logo" style={{ flexBasis: '5%' }}>
        <img src='hfclone\public\logo192.png' alt="Logo"  />
      </div>
      <div className="title" style={{ flexBasis: '10%' }}><button>HFClone</button></div>
      <div className="search-bar" style={{ flexBasis: '39%' }}>
        <input type="text" placeholder="Search" />
      </div>
      <button className="suggestions-button" style={{ flexBasis: '10%' }}>Suggestions</button>
      <button className="discussions-button" style={{ flexBasis: '10%' }}>Discussions</button>
      <div className="separator" style={{ flexBasis: '4%' }}></div>
      <button className="login-button" style={{ flexBasis: '11%' }}>Log In</button>
      <button className="signup-button" style={{ flexBasis: '11%' }}>Sign Up</button>
    </header>
  );
};

export default HeaderDefault;
