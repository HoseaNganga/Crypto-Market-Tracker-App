import React from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
    const {id}=useParams();
    
  return (
    <div>
      <h3>Coin</h3>
    </div>
  );
};

export default Coin;
