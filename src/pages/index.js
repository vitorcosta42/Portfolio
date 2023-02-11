// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// pages
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";

import React from "react";

const Pages = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Pages;
