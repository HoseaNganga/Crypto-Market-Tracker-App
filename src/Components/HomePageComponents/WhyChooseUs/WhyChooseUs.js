import React from "react";
import "./WhyChooseUs.css";
import { FaWallet } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa6";
import { FaPenFancy } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa6";
import { FaPenClip } from "react-icons/fa6";
import image1 from "../../../ImageAssets/chooseus/choose-main.png";
const WhyChooseUs = () => {
  return (
    <div id="chooseUs" className="chooseUsContainer">
      <h3>
        Why <span className="gradient-text">Choose Us</span>{" "}
      </h3>
      <div className="chooseUsContainerFlex">
        <div className="firstFlexContainer">
          <div className="chooseUsDiv">
            <div className="chooseIcon">
              <FaWallet size={25} color="#ae67fa" />
            </div>
            <div className="chooseUsDescription">
              <h4>CONNECT YOUR WALLET</h4>
              <p>Use Trust Wallet, Metamask or to connect to the app.</p>
            </div>
          </div>
          <div className="chooseUsDiv">
            <div className="chooseIcon">
              <FaMobile size={25} color="#ae67fa" />
            </div>
            <div className="chooseUsDescription">
              <h4>RECEIVE YOUR OWN NFTS</h4>
              <p>Invest all your crypto at one place on one platform.</p>
            </div>
          </div>
          <div className="chooseUsDiv">
            <div className="chooseIcon">
              <FaPenFancy size={25} color="#ae67fa" />
            </div>
            <div className="chooseUsDescription">
              <h4>SELECT YOUR QUANTITY</h4>
              <p>Upload your crypto and set a title, description and price.</p>
            </div>
          </div>
        </div>
        <div className="secondFlexContainer">
          <img src={image1} alt="coin" />
        </div>
        <div className="thirdFlexContainer">
          <div className="chooseUsDiv">
            <div className="chooseIcon">
              <FaPenClip size={25} color="#ae67fa" />
            </div>
            <div className="chooseUsDescription">
              <h4>TAKE A MARKET TO SELL</h4>
              <p>
                Discover, collect the right crypto collections to buy or sell.
              </p>
            </div>
          </div>
          <div className="chooseUsDiv">
            <div className="chooseIcon">
              <FaClipboardCheck size={25} color="#ae67fa" />
            </div>
            <div className="chooseUsDescription">
              <h4>CONFIRM TRANSACTION</h4>
              <p>Earn by selling your crypto on our marketplace.</p>
            </div>
          </div>
          <div className="chooseUsDiv">
            <div className="chooseIcon">
              <FaMoneyBill size={25} color="#ae67fa" />
            </div>
            <div className="chooseUsDescription">
              <h4>DRIVE YOUR COLLECTION</h4>
              <p>We make it easy to Discover, Invest and manage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
