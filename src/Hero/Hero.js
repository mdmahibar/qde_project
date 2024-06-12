import React from "react";
import "../Hero/Hero.css";
// import hero_img from '../assest/hero.jpg';

const Hero = () => {
  return (
    <div className="main_hero">
      <div className="hero">
        <div className="hero_button"></div>
      </div>
      <div className="hero_moto">
        <div className="hero_moto_container">
        <h1>Welcome to Quantum Data Engines</h1>
        <p>
          Join us in transforming the future of financial security with
          cutting-edge AI and unparalleled data expertise.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
