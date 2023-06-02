import logo from './logo.svg';
import './App.css';

export function Header() {
  return (
    <div className="Header">

      <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="../assets/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap"
          rel="stylesheet"
        />
        <title>noiselike.art</title>
      </head>

      <body>
        <h1>noiselike.art</h1>

      </body>
    </div>
  )
}

export function App() {
  return (
    <div className="App">

      <h2>
        <strong>noiselike.art</strong> is a hub to bring together artists, musicians, producers, and fans to release and discover music. Through a cooperative framework, noiselike participants seek to fundamentally reimagine the relationship between artists and patrons, reduce traditional barriers of entry, and cut out parasitic middlemen.

        The prevailing paradigm of recording and releasing music is broken. As the landscape has shifted towards streaming services with valuations in the tens of billions of dollars, artists (i.e., the primary value generators) have been left behind. Due to increasing monopolization and vertical integration of the recording and live music market, the old way of making a living for artists is no longer viable for most.

        Many barriers have existed since the outset of popular music recording, especially due to the centralization of expensive recording equipment and the resulting power of recording industry executives and their “taste makers”. Due to improvements in audio recording technology and manufacturing, it’s now cheaper and easier than ever for people to create, record, and produce professional quality music. There isn’t, however, an equally easy way for those artists to connect with an audience organically and get fairly rewarded by their fans.

        What if artists could self-release their content, be in complete control of their IP, and connect directly with fans? What if fans themselves could easily find new music and perhaps benefit from the success of the artists they support? Thanks to developments in peer-to-peer storage and emerging concepts of “ownership” in the digital world, a new paradigm is possible that benefits fans and artists while cutting out more entrenched gatekeepers and rent seekers than ever before. In the era of DIY music production, noiselike seeks to enable music makers and fans to interact and share their passion.
      </h2>
    </div>
  );
}

export default App;
