import React from "react";
import "../styles/hero.css";
import bg from "../images/dddd.png";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero col-12">
      <img src={bg} />
      <div className="row hero-content">
        <h1>Creating Lead Optimised Websites for Small Business Owners.</h1>
        <div>
          <p>
            Want to get more leads? Want to generate more demand? Want to
            convert more website visitors? Zeta has got you covered.
          </p>
          <span className="sub-text"><b>How we'll help you</b> <FaArrowRight/> </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
