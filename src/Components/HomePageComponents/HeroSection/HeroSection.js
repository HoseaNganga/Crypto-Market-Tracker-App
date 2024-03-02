import React from "react";
import "./HeroSection.css";
import image1 from "../../../ImageAssets/hero/bitcoin.png";
import image2 from "../../../ImageAssets/hero/ethereum.png";
const HeroSection = () => {
  return (
    <div className="heroContainer">
      <div className="heroIcons">
        <img src={image1} alt="heroIcon" />
      </div>
      <h2>
        TRACK AND TRADE <span className="gradient-text">CRYPTO CURRENCIES</span>
      </h2>
      <div className="heroIcons">
        <img src={image2} alt="heroIcon" />
      </div>
    </div>
  );
};

export default HeroSection;
