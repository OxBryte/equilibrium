import React from 'react';
import '../styles/step2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Step2() {
    
  return (
    <div className=''>
        <form>
            <div className="login">
                <div className='login-text'>
                    <h1>Step 2</h1>
                    <span>Setting vital details...</span>
                </div>

                <div className='form'>
                    <div className='row col-12 form-input'>
                        <div className='details row'>
                            <input className='col-12' type='number' placeholder='Phone Number' required />
                            <input className='col-12' type='text' placeholder='Gender' required />
                            <input className='col-12' type='password' placeholder='Country' required />
                            <input className='col-12' type='password' placeholder='Postal Code' required />
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

export default Step2;
