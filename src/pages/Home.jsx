import React from "react";
import Brands from "../components/Brands";
import About from "../features/About";
import Home from "../features/Home";
import OurSource from "../features/OurSource";
import OurStory from "../features/OurStory";
import OurWork from "../features/OurWork";
import Products from "../features/Products";
import useWindowDimensions from "../hooks/UseWindowDimention";

function HomePage() {
  const { width } = useWindowDimensions();

  return (
    <>
      <Home />
      <About />
      <OurStory />
      <OurSource />
      <Products />
      <OurWork />
    </>
  );
}

export default HomePage;
