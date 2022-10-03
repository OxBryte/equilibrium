import React from 'react';
import '../styles/body.css';
// import asset from '../images/asset.mp4'
import asset1 from '../images/asset1.mp4'
import asset2 from '../images/asset2.mp4'
import profile  from '../images/profile.svg'
import patner1  from '../images/image 3.png'
import patner2  from '../images/image 4.png'
import marketplace  from '../images/marketplace.png'
import { Button } from 'react-bootstrap'
import Roadmap from './roadmap';
import Faqs from './accordion';

function Body() {
  return (
    <div className="body">
          <div className='row col-12 body-content'>
            <div className=' body-text col-lg-6 col-md-12 col-sm-12'>
                <h1>About Us</h1>
                <p>The First WEB3 Fashion Marketplace On The Solana Blockchain</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate accusantium, eos aliquid id sapiente officia amet nobis voluptatum ullam. Eum tempore illo labore ipsa, qui debitis accusantium. Odio, cupiditate?</p>
                <Button variant="primary">Learn more</Button>{' '}
            </div>
            <div className='body-video col-lg-6 col-md-12 col-sm-12'>
                <video src={asset2} autoPlay loop width={500} />
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
            </div>
            <div>
              <Roadmap />
            </div>
          </section>

          <section className='section-bg'>
            <div className='utilities'>
              <div className="utilities-header">
                <h1>Utilities</h1>
                <p>The First WEB3 Fashion Marketplace On The Solana Blockchain</p>
              </div>
              <div className='utilities-body row col-12'>
                <div className='utilities-item col-lg-6 col-md-12 col-sm-12'>
                  <h2>Web3 Marketplace</h2>
                  <img src={marketplace} alt='' />
                </div>
                <div className='utilities-item col-lg-6 col-md-12 col-sm-12'>
                  <h2>Web3 Marketplace</h2>
                  <img src={marketplace} alt='' />
                </div>
                <div className='utilities-item col-lg-6 col-md-12 col-sm-12'>
                  <h2>Web3 Marketplace</h2>
                  <img src={marketplace} alt='' />
                </div>
                <div className='utilities-item col-lg-6 col-md-12 col-sm-12'>
                  <h2>Web3 Marketplace</h2>
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
          <section className='faqs heys'>
            <div className='faqs-item'>
              <h1>Faqs</h1>
              <Faqs />
            </div>
          </section>
    </div>
  );
}

export default Body;
