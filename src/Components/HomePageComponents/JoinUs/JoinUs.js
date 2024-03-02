import React from "react";
import "./JoinUs.css";
import image1 from "../../../ImageAssets/hero/bitcoin.png";
import image2 from "../../../ImageAssets/hero/ethereum.png";

const JoinUs = () => {
  return (
    <div id="join" className="joinContainer">
      <div className="heroContainer">
        <div className="heroIcons">
          <img src={image1} alt="heroIcon" />
        </div>
        <h2>
          JOIN US <span className="gradient-text">VIA DISCORD</span>
        </h2>
        <div className="heroIcons">
          <img src={image2} alt="heroIcon" />
        </div>
      </div>
      <div className="linkToDiscord">
        <a href="https://discord.com/" target="_blank" rel="noreferrer">
          Join Via Discord
        </a>
      </div>
    </div>
  );
};

export default JoinUs;
