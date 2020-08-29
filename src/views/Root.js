import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import HomeView from "./HomeView";

const Root = () => {
  return (<ParallaxProvider><HomeView /></ParallaxProvider>);
};

export default Root;
