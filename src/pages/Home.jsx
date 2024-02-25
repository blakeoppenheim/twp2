import React from "react";
import SEO from "../components/SEO";
import About from "../features/About";
import Home from "../features/Home";
import OurSource from "../features/OurSource";
import OurStory from "../features/OurStory";
import OurWork from "../features/OurWork";
import Products from "../features/Products";
import { metaTagsHomePage } from "./../constants/MetaTags";
import useWindowDimensions from "../hooks/UseWindowDimention";

function HomePage() {
  const { width } = useWindowDimensions();

  return (
    <>
      <SEO
        metaTitle={metaTagsHomePage.metaTitle}
        metaDescription={metaTagsHomePage.metaDescription}
        metaKeywords={metaTagsHomePage.metaKeywords}
        url={metaTagsHomePage.urlPage}
        metaImage={metaTagsHomePage.metaImage}
      />
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
