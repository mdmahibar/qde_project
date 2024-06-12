import React from "react";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Landing from "./Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About/About";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Landing />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Hero />
              <Landing />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
