import React from "react";
import "./BreakeLine.css";

const BreakeHeader = ({ children }) => (
  <div id="wrapper">
    <div id="wrapperItemLeft">
      <hr />
    </div>
    <div id="wrapperItemCentral">
      <div id="wrapperText">{children}</div>
    </div>
    <div id="wrapperItemRight">
      <hr />
    </div>
  </div>
);

export default BreakeHeader;
