import React from "react";
import Construction from "./construction.gif";

export function Venue() {
  return (
    <div>
      <p>
        Featured artists can be seen <span class="live_text">live</span> at the noiselike venue <strong>unit b</strong>.
        <br />Hang with the community at <a href="http://listening.bar" target="blank">listening.bar</a>.
      </p>

      <br />
      <br />

      <p>
        If you are interested in playing a set, drop a line
        <br />in the <span class="live_text">#live</span> channel on discord.
      </p>

      <div class="setlist">
        <h2>Upcoming</h2>

        <ul class="leaders">
          <li><span>aggressive congas</span> <span>1/1 17:00 UTC </span></li>

          <li><span>colliding hands</span> <span>1/3 13:00 UTC </span></li>

          <li><span>kitschy pals</span> <span>1/4 13:30 UTC </span></li>

          <li>
            <span>cherry cough drops</span>
            <span>1/5 16:00 UTC </span>
          </li>
        </ul>
      </div>

      <img src={Construction} alt="under construction" class="oldgif"/>
    </div>
  );
}

export default Venue;
