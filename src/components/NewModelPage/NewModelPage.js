import React from 'react';
import HeaderProfile from '../Common/HeaderProfile/HeaderProfile';
import './NewModelPage.css';

const NewModelPage = () => {
  return (
    <div className="NewModelPage">
      <HeaderProfile />

      <div className="centeredContent">
        <img
          src="path_to_your_circular_logo_image"
          alt="Circular Logo"
          className="logo"
        />
        <h1>Create a New Model</h1>
        <div className="formContainer">
          <div className="boundary">
            <div className="inputContainer">
              <label htmlFor="modelName">Model Name:</label>
              <input type="text" id="modelName" placeholder="Enter Model Name" />
            </div>
            <div className="inputContainer">
              <label htmlFor="modelCategory">Model Category:</label>
              <select id="modelCategory">
                {/* Options for Model Category dropdown */}
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="inputContainer">
              <label htmlFor="modelDescription">Model Description:</label>
              <textarea
                id="modelDescription"
                placeholder="Enter Model Description"
                rows="4"
              ></textarea>
            </div>
            <div className="buttonContainer">
              <button className="createButton">Create</button>
              <button className="cancelButton">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewModelPage;
