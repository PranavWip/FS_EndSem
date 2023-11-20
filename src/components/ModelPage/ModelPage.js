import React from 'react';
import HeaderProfile from '../Common/HeaderProfile/HeaderProfile';
import './ModelPage.css';

const ModelPage = () => {
  return (
    <div className="ModelPage">
      <HeaderProfile />
      <div className="contentWrapper">
        <div className="leftColumn">
          <div className="modelDetails">
            <div className="detailRow">
              <span>Model Name:</span>
              {/* Insert model name here */}
            </div>
            <div className="detailRow">
              <span>Model ID:</span>
              {/* Insert model ID here */}
            </div>
            <div className="detailRow">
              <span>Category:</span>
              {/* Insert category here */}
            </div>
            <div className="detailRow">
              {/* Like and Share buttons */}
              {/* Insert like and share buttons here */}
            </div>
          </div>
        </div>
        <div className="rightColumn">
          <div className="topRight">
            <button className="downloadButton">Download</button>
          </div>
          <div className="toggleContent">
            {/* Horizontal radio toggle button */}
            {/* Implement radio buttons here */}
            {/* Content based on selected radio option */}
            {/* Show content based on selected option */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelPage;
