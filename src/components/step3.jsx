import React from 'react';
import '../styles/step3.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function Step3() {
    
  return (
    <div className=''>
        <form>
            <div className="login">
                <div className='login-text'>
                    <h1>Step 3</h1>
                    <span>A short description...</span>
                </div>

                <div className='form'>
                    <div className='row col-12 form-input'>
                        <div className='details row'>
                            <textarea type='text' placeholder='Write a short description of your fundraiser (0-300 words)' required></textarea>
                            <input className='col-12' type='text' placeholder='Portfolio Link (optional)' />
                            <input className='col-12' type='text' placeholder='Social Media (optional)' />
                            <input type="file" accept="image/png, image/jpg" required />
                        </div>
                        <div className='checkbox'>
                            <Form.Check label="Accept terms and condition" name="group1" type='checkbox' required />
                        </div>
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

export default Step3;
