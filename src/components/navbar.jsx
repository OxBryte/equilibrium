import React from 'react';
import '../styles/navbar.css';
// import { BsBars } from 'react-icons/bs';
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div className="">
        <nav className='nav'>
            <div className='navlink' to='/'>
                <img src={logo} alt='logo' width={80} />
            </div>
            <div className='bars'>
                {/* <BsBars /> */}
            </div>
            <div className='navmenu'>
                <div className='navlink active' to='/' active>
                    <a href=''>Home</a>
                </div>
                <div className='navlink' to='/services' activeStyle>
                    <a href=''>Roadmap</a>
                </div>
                <div className='navlink' to='/services' activeStyle>
                    <a href=''>Team</a>
                </div>
                <div className='navlink' to='/services' activeStyle>
                    <a href=''>About</a>
                </div>
                <div className='navlink' to='/contact-us' activeStyle>
                    <a href=''>Contact</a>
                </div>
                {/* <div className='navlink' to='/sign-up' activeStyle>
                    <a href=''>Sign Up</a>
                </div> */}
                {/* Second Nav */}
                {/* <div className='navbtn'>
                    <button to='/sign-in'>Connect wallet</button>
                </div> */}
            </div>
            {/* <div className='navbtn'>
                <button to='/signin'>Connect wallet</button>
            </div> */}
        </nav>
    </div>
  );
}

export default Navbar;
