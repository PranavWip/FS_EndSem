import React from 'react';
import HeaderProfile from '../Common/HeaderProfile/HeaderProfile';
import './ExplorePage.css';

const ExplorePage = () => {
  return (
    <div className="ExplorePage">
      <HeaderProfile />
      <div className="threeColumns">
        {/* First Column */}
        <div className="leftColumn">
          <button className="newModelButton">New Model</button>
          <div className="userModelsRectangularZone">
            {/* Zone for User Models */}
          </div>
          <div className="userDiscussionsRectangularZone">
            {/* Zone for User Discussions */}
          </div>
        </div>
        {/* Second Column */}
        <div className="middleColumn">
          {/* Zone for Search Results */}
        </div>
        {/* Third Column */}
        <div className="rightColumn">
          {/* Zone for Suggested Information */}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
