import React from 'react';
import HeaderProfile from '../Common/HeaderProfile/HeaderProfile';
import './EditModelPage.css';

const EditModelPage = () => {
  return (
    <div className="EditModelPage">
      <HeaderProfile />
      <div className="centeredContent">
        <h1>Edit Model Page</h1>
      </div>
        <div className="inputContainer">
          <label htmlFor="modelId">Model ID:</label>
          <p>12345</p> {/* Replace with actual model ID */}
        </div>
        <div className="inputContainer">
          <label htmlFor="changeModelName">Change Model Name:</label>
          <input type="text" id="changeModelName" placeholder="New Model Name" className="wideInput" />
        </div>
        <div className="inputContainer">
          <label htmlFor="changeModelCategory">Change Model Category:</label>
          <input type="text" id="changeModelCategory" placeholder="New Model Category" className="wideInput" />
        </div>
        <div className="inputContainer">
          <label htmlFor="changeModelDescription">Change Model Description:</label>
          <textarea
            id="changeModelDescription"
            placeholder="New Model Description"
            rows="4"
            className="wideInput"
          ></textarea>
        </div>
        <div className="centeredContent">
        <div className="buttonContainer">
          <button className="saveButton">Save</button>
          <button className="clearButton">Clear</button>
        </div>
        </div>
    </div>
  );
};

export default EditModelPage;
