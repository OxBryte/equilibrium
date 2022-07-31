import React from 'react';
import '../styles/step1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Step1() {

  return (
    <div className=''>
        <form>
            <div className="login">
                <div className='login-text'>
                    <h1>Step 1</h1>
                    <span>Let's start with the basics</span>
                </div>

                <div className='form'>
                    <div className='row col-12 form-input'>
                        <div className='name row'>
                            <input className='col-6' type='text' placeholder='First Name' required />
                            <input className='col-6' type='text' placeholder='Last Name' required />
                        </div>
                        <div className='details row'>
                            <input className='col-12' type='username' placeholder='Username' required />
                            <input className='col-12' type='email' placeholder='Email' required />
                            <input className='col-12' type='password' placeholder='Password' required />
                            <input className='col-12' type='password' placeholder='Confirm Password' required />
                        </div>
                        <h2>By continuing, you agree to the GoFundMe terms and acknowledge receipt of our privacy notice.</h2>
                    </div>
                </div>
            </div>
            <div className=''>
                <button className='form-button' type='submit'>
                    Next
                </button>
            </div>
        </form>
    </div>
    
  );
}

export default Step1;
