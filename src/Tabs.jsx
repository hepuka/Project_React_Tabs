import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Welcome from "./Pages/Welcome";
import Admin from "./Pages/Admin";
import Registration from "./Pages/Registration";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <Navbar toggleTab={toggleTab} toggleState={toggleState} />
      <div className="content-tabs">
        <Welcome toggleState={toggleState} />
        <Admin toggleState={toggleState} />
        <Registration toggleState={toggleState} />
      </div>
    </div>
  );
};

export default Tabs;
