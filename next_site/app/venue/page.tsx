import Construction from "../public/construction.gif";

export default function Venue() {
    return (
        <div>
            <h2>
                Featured artists can be seen <span className="live_text">live</span> at the noiselike venue <strong>unit b</strong>.
                <br />Hang with the community at <a href="http://listening.bar" target="_blank">listening.bar</a>.
            </h2>

            <br />
            <br />

            <h2>
                If you are interested in playing a set, drop a line
                <br />in the <span className="live_text">#live</span> channel on discord.
            </h2>

            <div className="setlist">
                <h2>Upcoming</h2>

                <ul className="leaders">
                    <li><span>aggressive congas</span> <span>1/1 17:00 UTC </span></li>

                    <li><span>colliding hands</span> <span>1/3 13:00 UTC </span></li>

                    <li><span>kitschy pals</span> <span>1/4 13:30 UTC </span></li>

                    <li>
                        <span>cherry cough drops</span>
                        <span>1/5 16:00 UTC </span>
                    </li>
                </ul>
            </div>
            <p />
            <img src={'Construction'} alt="under construction" className="oldgif" />
        </div>
    );
}