import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export function Community() {
  return (
    <div>
      <h2>
        popular <strong>7 days</strong> <br />_______________________
      </h2>

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

export default Community;
