// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// pages
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

import React from "react";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};

export default Pages;
