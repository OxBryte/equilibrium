import '../styles/step3.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function Step3() {
  return (
    <div className=''>
        <div className='col-12 line'>
            <div className='lines '></div>
            <div className='lines'></div>
            <div className='lines'></div>
            <div className='lines lineo'></div>
        </div>
        <div className="login">
            <div className='login-text'>
                <h1>Step 3</h1>
                <span>A short description...</span>
            </div>

            <form className='form'>
                <div className='row col-12 form-input'>
                    <div className='details row'>
                        <textarea type='text' placeholder='Write a short description of your fundraiser (0-300 words)'></textarea>
                        <input className='col-12' type='text' placeholder='Portfolio Link (optional)'></input>
                        <input className='col-12' type='text' placeholder='Social Media (optional)'></input>
                        <input type="file" accept="image/png, image/jpg"></input>
                    </div>
                    <div className='checkbox'>
                        <Form.Check label="Accept terms and condition" name="group1" type='checkbox' />
                    </div>
                </div>
            </form>
        </div>
        <div className=''>
            <button className='form-button'>
                Next
            </button>
        </div>
    </div>
    
  );
}

export default Step3;
