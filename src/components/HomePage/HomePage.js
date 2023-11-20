// HomePage.js

import React from 'react';
import HeaderDefault from '../Common/HeaderDefault/HeaderDefault'; // Adjust the path to reach HeaderDefault.js

const HomePage = () => {
  return (
    <div className="HomePage">
      {/* Render the HeaderDefault component */}
      <HeaderDefault />
      {/* Other content specific to the home page */}
    </div>
  );
};

export default HomePage;
