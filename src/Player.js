import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export function Player() {
  return (
    <div className="player">
      <ReactAudioPlayer
        src="https://ipfs.io/ipfs/QmcYJWtmvX8bxapTMkHBpnxRKDuqNUvsz5R7zuECHUd2yz?filename=ipfs_test_song.mp3"
        autoPlay
        controls
      />
    </div>
  );
}

export default Player;
