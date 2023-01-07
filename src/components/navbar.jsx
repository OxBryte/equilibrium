import React from 'react';
import '../styles/navbar.css';
import { FaBars } from 'react-icons/fa';
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div className="">
        <nav className='nav'>
            <div className='navlink' to='/'>
                <img src={logo} alt='logo' width={80} />
            </div>
            <div className='bars'>
                <FaBars />
            </div>
            <div className='navmenu'>
                <div className='navlink active' to='/' active>
                    <a href=''>Home</a>
                </div>
                <div className='navlink' to='/services' activeStyle>
                    <a href='#about'>Contact</a>
                </div>
                <div className='navlink' to='/services' activeStyle>
                    <a href='#roadmap'>About</a>
                </div>
                <button className='btn btn-sm btn-info'>Book a free review</button>
            </div>
            {/* <div className='navbtn'>
                <button to='/signin'>Connect wallet</button>
            </div> */}
        </nav>
    </div>
  );
}

export default Navbar;
