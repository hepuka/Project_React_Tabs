import React from "react";
import { navLinks } from "./data.js";

const Navbar = ({ toggleTab, toggleState }) => {
  return (
    <div className="bloc-tabs">
      {navLinks.map((item) => {
        return (
          <button
            className={toggleState === item.id ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(item.id)}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;

/* gombokat lehet egyenként kellene az adminonly szelektáció miatt */
