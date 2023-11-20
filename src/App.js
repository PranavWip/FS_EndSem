import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import ModelPage from './components/ModelPage/ModelPage';
import NewModelPage from './components/NewModelPage/NewModelPage';
import EditModelPage from './components/EditModelPage/EditModelPage';
import ExplorePage from './components/ExplorePage/ExplorePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import EditProfilePage from './components/EditProfilePage/EditProfilePage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/model" element={<ModelPage />} />
          <Route path="/newmodel" element={<NewModelPage />} />
          <Route path="/editmodel" element={<EditModelPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/editprofile" element={<EditProfilePage />} />
          {/* Other routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
