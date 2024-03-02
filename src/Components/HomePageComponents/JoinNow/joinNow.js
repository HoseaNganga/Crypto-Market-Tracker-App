import React from "react";
import "./joinNow.css";
import image1 from "../../../ImageAssets/hero/bitcoin.png";
import image2 from "../../../ImageAssets/hero/ethereum.png";

const joinNow = () => {
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
    </div>
  );
};

export default joinNow;
