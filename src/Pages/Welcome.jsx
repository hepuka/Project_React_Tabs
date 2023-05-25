import React from "react";
import welcome from "../Assets/cafe.png";
import "../App.css";
const Welcome = ({ toggleState }) => {
  return (
    <div className={toggleState === 1 ? "content  active-content" : "content"}>
      <div className="box-center">
        <img src={welcome} alt="welcome"></img>
      </div>
    </div>
  );
};

export default Welcome;
