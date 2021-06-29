import React, { Component } from "react";
import ScrollButton from "react-scroll-button";

class ScrollComponent extends Component {
  render() {
    return (
      <ScrollButton
        behavior={"smooth"}
        buttonBackgroundColor={"#265D8C"}
        iconType={"arrow-up"}
        style={{ fontSize: "24px" }}
        scrollSpeed={"2s"}
      />
    );
  }
}

export default ScrollComponent;
