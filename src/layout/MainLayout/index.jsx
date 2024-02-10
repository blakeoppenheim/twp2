import React from "react";
import NavBar from "../../components/Navbar";
import Footer from "./../../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <NavBar  />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
