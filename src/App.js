import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

import Header from './Header.js';
import Sync from './Sync.js';
import Navbar from './Navbar.js';

import Explore from './Explore';
import Community from './Community';
import Profile from './Profile';
import Mint from './Mint.js';
import Venue from './Venue';
import About from './About.js';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Sync />
        <Navbar />
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      <div className="centered-container">
        <ReactAudioPlayer
          src="https://ipfs.io/ipfs/QmcYJWtmvX8bxapTMkHBpnxRKDuqNUvsz5R7zuECHUd2yz?filename=ipfs_test_song.mp3"
          autoPlay
          controls
        />
      </div>
    </div>

  );
}

export default App;