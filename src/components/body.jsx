import React from 'react';
import '../styles/body.css';
import asset1 from '../images/asset1.gif'

function Body() {
  return (
    <div className="body">
        <div className='row col-12 hero-content'>
            <div className='hero-img col-6'>
                <img src={asset1} alt="" srcset="" />
            </div>
            <div className=' hero-text col-6'>
                <h1>EQUILIBRIUM</h1>
                <p>The First WEB3 Fashion Marketplace On The Solana Blockchain</p>
            </div>
        </div>
    </div>
  );
}

export default body;
