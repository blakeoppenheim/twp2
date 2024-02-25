import React from "react";
import logo from "./../../assets/icons/twpLogo.svg";
import { Helmet } from "react-helmet";
function SEO({ metaTitle, metaDescription, metaKeywords, metaImage, url }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content="index,follow" />
      <link rel="shortcut icon" href={logo} />

      {/* Open Graph meta tags for social media sharing */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage || logo} />
      <meta property="og:url" content={url} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage || logo} />

      {/* Other meta tags you might consider */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default SEO;
