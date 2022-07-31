import React from 'react';
import '../styles/step4.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from '../images/profile.svg'

function Step4() {

    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submited the form.')
    }

  return (
    <div className=''>
        <form onSubmit={handleSubmit}>
            <div className="login">
                <div className='login-text'>
                    <h1>Step 4</h1>
                    <span>Finishing...</span>
                </div>

                <div className='form'>
                    <div className='row col-12 form-input'>
                        <img src={Profile} alt=''></img>
                        <h5>@OlumideSilas</h5>
                        <h3>Account created succcessfully</h3>
                    </div>
                </div>
            </div>
            <div className=''>
                <button className='form-button' type='submit'>
                    Finish
                </button>
            </div>
        </form>
    </div>
    
  );
}

export default Step4;
