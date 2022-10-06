import React from 'react';
import '../styles/body.css';
// import asset from '../images/asset.mp4'
import asset1 from '../images/asset1.mp4'
import asset2 from '../images/asset2.mp4'
import profile  from '../images/profile.svg'
import patner1  from '../images/image 3.png'
import patner2  from '../images/image 4.png'
import marketplace  from '../images/marketplace.png'
import Roadmap from './roadmap';
import Faqs from './accordion';
import {FaTwitter, FaDiscord, FaInstagram} from 'react-icons/fa'

function Body() {
  return (
    <div className="body">
          <div className='row col-12 body-content'>
            <div className=' body-text col-lg-6 col-md-12 col-sm-12'>
                <h1>About Us</h1>
                <p>The First WEB3 Fashion Marketplace On The Solana Blockchain</p>
                <p>Equilibrium NFT is a team of Developers, Artists, & Fashion experts who are on a mission to create a Peer-to-Peer marketplace to buy, sell, and trade your fashion items via Crypto Payments.</p>
                <p>$LIBRIUM is the Token that Equilibrium NFT will be rewarding its holders via Staking their NFT’s and its utility is ever growing. Here are just a few examples of the Utility of this projects token.</p>
                {/* <div className='footer-icon'>
                  <a href='' ><span><FaTwitter size={30}/></span></a>
                  <a href=''><span><FaDiscord size={30}/></span></a>
                  <a href=''><span><FaInstagram size={30}/></span></a>
                </div> */}
                <button className='about-button'>Learn more</button>{' '}
            </div>
            <div className='body-video col-lg-6 col-md-12 col-sm-12'>
                <video src={asset2} autoPlay loop width={500} />{' '}
            </div>
          </div>

          {/* <div className='row col-12 body-content'>
            <div className='body-video col-lg-6 col-md-12 col-sm-12'>
                <video src={asset2} autoPlay loop width={500} />
            </div>
            <div className=' body-text col-lg-6 col-md-12 col-sm-12'>
                <h1>About Us</h1>
                <p>The First WEB3 Fashion Marketplace On The Solana Blockchain</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate accusantium, eos aliquid id sapiente officia amet nobis voluptatum ullam. Eum tempore illo labore ipsa, qui debitis accusantium. Odio, cupiditate?</p>
                <Button variant="primary">Learn more</Button>{' '}
            </div>
          </div> */}

          <section className='roadmap'>
            <div className="roadmap-header">
              <h1>Roadmap</h1>
              <p>We have a long journey ahead, Kick back and join along.</p>
            </div>
            <div>
              <Roadmap />
            </div>
          </section>

          <section className='section-bg'>
            <div className='utilities'>
              <div className="utilities-header">
                <h1>Utilities</h1>
                {/* <p>The First WEB3 Fashion Marketplace On The Solana Blockchain</p> */}
              </div>
              <div className='utilities-body row col-12'>
                <div className='utilities-item col-lg-6 col-md-12 col-sm-12'>
                  <h2>Web3 Marketplace</h2>
                  <img src={marketplace} alt='' />
                </div>
                <div className='utilities-item col-lg-6 col-md-12 col-sm-12'>
                  <h2>Equilibrium Merchandise</h2>
                  <img src={marketplace} alt='' />
                </div>
                <div className='utilities-item col-lg-6 col-md-12 col-sm-12'>
                  <h2>Stake For $EQM</h2>
                  <img src={marketplace} alt='' />
                </div>
                <div className='utilities-item col-lg-6 col-md-12 col-sm-12'>
                  <h2>Daily NFT Raffles</h2>
                  <img src={marketplace} alt='' />
                </div>
              </div>
            </div>

            <div className='team'>
              <div className="team-header">
                <h1>Team</h1>
                <p>We are a fully Doxxed team of Developers, Artists, & Professionals who believe in giving back to the community that drives culture.</p>
              </div>
              <div className='team-body row col-12'>
                <div className='team-body-item col-lg-3 col-md-3 col-sm-6'>
                  <img src={profile} alt='' />
                  <h2>Oxbryte</h2>
                </div>
                <div className='team-body-item col-lg-3 col-md-3 col-sm-6'>
                  <img src={profile} alt='' />
                  <h2>Oxbryte</h2>
                </div>
                <div className='team-body-item col-lg-3 col-md-3 col-sm-6'>
                  <img src={profile} alt='' />
                  <h2>Oxbryte</h2>
                </div>
                <div className='team-body-item col-lg-3 col-md-3 col-sm-6'>
                  <img src={profile} alt='' />
                  <h2>Oxbryte</h2>
                </div>
              </div>
            </div>
          </section>
          <div className='patners'>
            <div className="patners-header">
              <h1>Patners</h1>
            </div>
            <div className='patners-image'>
              <img src={patner1} alt='' />
              <img src={patner2} alt='' />
            </div>
          </div>
          <section className='faqs'>
            <div className='faqs-item'>
              <h1>Faqs</h1>
              <Faqs />
            </div>
          </section>
          <section className='footer'>
            <div className='footer-icon'>
              <a href='' ><span><FaTwitter size={30}/></span></a>
              <a href=''><span><FaDiscord size={30}/></span></a>
              <a href=''><span><FaInstagram size={30}/></span></a>
            </div>
          </section>  
    </div>
  );
}

export default Body;
