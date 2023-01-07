import React from "react";
import "../styles/body.css";
import outlaw5 from "../images/outlaw5.png";
import outlaw2 from "../images/outlaw2.png";
import outlaw3 from "../images/outlaw3.png";
import outlaw4 from "../images/outlaw4.png";
import marketplace from "../images/marketplace.png";
import Roadmap from "./roadmap";
import Faqs from "./accordion";
import outlaw1 from "../images/outlaw1.png";
import {
  FaTwitter,
  FaDiscord,
  FaInstagram,
  FaStar,
  FaArrowRight,
  FaUser,
} from "react-icons/fa";

function Body() {
  return (
    <div className="body">
      <div className="col-12 body-content" id="about">
        <div className="body-text ">
          <h1>We work to optimise your branding through your website.</h1>
          <div>
            <div>
              <p>Hone your brand voice, say exactly what you want to say.</p>
            </div>
            <div>
              <p>Sell the benefits so well - that the product sells itself.</p>
            </div>
            <div>
              <p>Make the customer trust you through social proofing.</p>
            </div>
          </div>
          <div className="footer-icon">
            <a href="">
              <span>
                <FaTwitter size={20} />
              </span>
            </a>
            <a href="">
              <span>
                <FaDiscord size={20} />
              </span>
            </a>
            <a href="">
              <span>
                <FaInstagram size={20} />
              </span>
            </a>
          </div>
        </div>
        <div className="grr">
          <h1>Reviews</h1>
          <div className="body-text-11">
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>4.8 Stars from 117 People</p>
          </div>
          <div className="body-text-1">
            <h2>Ikiyoyo Bujutsu</h2>
            <div className="body-text-11">
              <div>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>11 Days Ago</p>
            </div>
            <span>
              This service entirely changed the way we went about getting new
              members. We honed in on exactly who we want to join us, and the
              members came from there.
            </span>
          </div>
          <div className="body-text-1">
            <h2>Ikiyoyo Bujutsu</h2>
            <div className="body-text-11">
              <div>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>11 Days Ago</p>
            </div>
            <span>
              This service entirely changed the way we went about getting new
              members. We honed in on exactly who we want to join us, and the
              members came from there.
            </span>
          </div>
          <span className="sub-text">
            <b>See More Reviews</b> <FaArrowRight />{" "}
          </span>
        </div>
      </div>

      <section className="roadmap" id="roadmap">
        <div className="roadmap-header">
          <div className="roadmap-1">
            <div className="roadmap-11">
              <h1>Book A Free Website Review.</h1>
              <h2>
                Let our experts give feedback on exactly how to improve your
                website today.{" "}
              </h2>
              <h2>
                We will break down exactly how you can get more customers, so
                you don’t have to do the research.
              </h2>
              <button className="btn btn-info btn-lg">
                Book Your Review
              </button>
            </div>
            <div className="roadmap-11">
              <h1>How it Works</h1>
              <div className="works">
                <FaUser size={45} />
                <p>Our Specialist will review your site</p>
              </div>
              <div className="works">
                <FaUser size={45} />
                <p>Our Specialist will review your site</p>
              </div>
              <div className="works">
                <FaUser size={45} />
                <p>Our Specialist will review your site</p>
              </div>
            </div>
          </div>
          <h2>Or Upgrade Your Website Today.</h2>
        </div>
      </section>

      <section className="section-bg">
        <div className="utilities">
          <div className="utilities-header">
            <h1>Utilities</h1>
            {/* <p>The First WEB3 Fashion Marketplace On The Solana Blockchain</p> */}
          </div>
          <div className="utilities-body row col-12">
            <div className="utilities-item col-lg-6 col-md-12 col-sm-12">
              <h2>Web3 Marketplace</h2>
              <img src={marketplace} alt="" />
            </div>
            <div className="utilities-item col-lg-6 col-md-12 col-sm-12">
              <h2>Equilibrium Merchandise</h2>
              <img src={marketplace} alt="" />
            </div>
            <div className="utilities-item col-lg-6 col-md-12 col-sm-12">
              <h2>Stake For $EQM</h2>
              <img src={marketplace} alt="" />
            </div>
            <div className="utilities-item col-lg-6 col-md-12 col-sm-12">
              <h2>Daily NFT Raffles</h2>
              <img src={marketplace} alt="" />
            </div>
          </div>
        </div>

        <div className="team" id="team">
          <div className="team-header">
            <h1>Team</h1>
            <p>
              We are a fully Doxxed team of Developers, Artists, & Professionals
              who believe in giving back to the community that drives culture.
            </p>
          </div>
          <div className="team-body row col-12">
            <div className="team-body-item col-lg-3 col-md-3 col-sm-6">
              <img src={outlaw2} alt="" />
              <h2>Oxbryte</h2>
            </div>
            <div className="team-body-item col-lg-3 col-md-3 col-sm-6">
              <img src={outlaw3} alt="" />
              <h2>Oxbryte</h2>
            </div>
            <div className="team-body-item col-lg-3 col-md-3 col-sm-6">
              <img src={outlaw4} alt="" />
              <h2>Oxbryte</h2>
            </div>
            <div className="team-body-item col-lg-3 col-md-3 col-sm-6">
              <img src={outlaw5} alt="" />
              <h2>Oxbryte</h2>
            </div>
          </div>
        </div>
      </section>
      {/* <div className='patners'>
            <div className="patners-header">
              <h1>Patners</h1>
            </div>
            <div className='patners-image'>
              <img src={patner1} alt='' />
              <img src={patner2} alt='' />
            </div>
          </div> */}
      <section className="faqs">
        <div className="faqs-item">
          <h1>Faqs</h1>
          <Faqs />
        </div>
      </section>
      <section className="footer" id="contact">
        <div className="footer-icon">
          <a href="">
            <span>
              <FaTwitter size={30} />
            </span>
          </a>
          <a href="">
            <span>
              <FaDiscord size={30} />
            </span>
          </a>
          <a href="">
            <span>
              <FaInstagram size={30} />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Body;
