import React from "react";
import SEO from "../components/SEO";
import Contact from "../features/Contact";
import { metaTagsContactPage } from "./../constants/MetaTags";
function ContactPage() {
  return (
    <>
      <SEO
        metaTitle={metaTagsContactPage.metaTitle}
        metaDescription={metaTagsContactPage.metaDescription}
        metaKeywords={metaTagsContactPage.metaKeywords}
        url={metaTagsContactPage.urlPage}
        metaImage={metaTagsContactPage.metaImage}
      />
      <Contact />
    </>
  );
}

export default ContactPage;
