import React, { useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Webamp from 'webamp';
import Skin from './black_and_white.wsz';

const startSong = "https://ipfs.io/ipfs/QmcYJWtmvX8bxapTMkHBpnxRKDuqNUvsz5R7zuECHUd2yz?filename=ipfs_test_song.mp3"

function Player() {
  if (Webamp.browserIsSupported()) {
    console.log("true")
    return <PlayerWebamp />;
  } else {
    console.log("false")
    return <PlayerNormal />;
  }
}

function PlayerWebamp() {
  useEffect(() => {
    const webamp = new Webamp({
      initialTracks: [
        {
          metaData: {
            artist: "DJ Jo",
            title: "Nice Fun Song",
          },
          url: startSong,
        },
      ],
      initialSkin: {
        url: Skin,
      },

      /* options that don't seem to work

      __initialWindowLayout: {
        main: { position: { x: 0, y: 0 } },
        equalizer: { position: { x: 0, y: 116 } },
        playlist: { position: { x: 0, y: 232 }, size: [0, 4] },
        milkdrop: { position: { x: 275, y: 0 }, size: [7, 12] },
      },

      __initialWindowLayout: {
        main: { position: { left: 1000, top: 0 } },
        equalizer: {
          position: { left: 100, top: 116 },
          closed: true },
        playlist: {
          position: { left: 0, top: 232 },
          // size: { extraHeight: 0, extraWidth: 0 },
        },

      Optional. (Default: `false`) Should double size mode be enabled?
      enableDoubleSizeMode: true,

      Optional. (Default: `false`) Should global hotkeys be enabled?
      enableHotkeys: true,
      */

    });

    webamp.renderWhenReady(document.getElementById("webamp-container"));
  }, []);

  // return <div id="webamp-container"/>;
  return <div id="webamp-container" className="playerWebamp"/>;
  // return <div id="webamp-container" style={webampContainerStyle}/>;
}

function PlayerNormal() {
  // Perhaps you could show some simpler player in this case.
  return (
    <div className="playerNormal">
      <ReactAudioPlayer
        src={startSong}
        autoPlay
        controls
      />
    </div>
  );
}

export default Player;
