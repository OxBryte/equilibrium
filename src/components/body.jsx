import React from 'react';
import '../styles/body.css';
import asset from '../images/asset.mp4'
import asset1 from '../images/asset1.mp4'
import asset2 from '../images/asset2.mp4'
import { Button } from 'react-bootstrap'

function Body() {
  return (
    <div className="body">
          <div className='row col-12 body-content'>
            <div className=' body-text col-6'>
                <h1>About Us</h1>
                <p>The First WEB3 Fashion Marketplace On The Solana Blockchain</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate accusantium, eos aliquid id sapiente officia amet nobis voluptatum ullam. Eum tempore illo labore ipsa, qui debitis accusantium. Odio, cupiditate?</p>
                <Button variant="primary">Learn more</Button>{' '}
            </div>
            <div className='body-img col-6'>
                <video src={asset1} autoPlay loop width={500} />
            </div>
          </div>

          <div className='row col-12 body-content'>
            <div className='body-img col-6'>
                <video src={asset2} autoPlay loop width={500} />
            </div>
            <div className=' body-text col-6'>
                <h1>About Us</h1>
                <p>The First WEB3 Fashion Marketplace On The Solana Blockchain</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cupiditate accusantium, eos aliquid id sapiente officia amet nobis voluptatum ullam. Eum tempore illo labore ipsa, qui debitis accusantium. Odio, cupiditate?</p>
                <Button variant="primary">Learn more</Button>{' '}
            </div>
            
          </div>
    </div>
  );
}

export default Body;
