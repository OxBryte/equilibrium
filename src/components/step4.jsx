import '../styles/step4.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Profile from '../images/profile.svg'

function Step4() {
  return (
    <div className=''>
        <div className='col-12 line'>
            <div className='lines '></div>
            <div className='lines'></div>
            <div className='lines'></div>
            <div className='lines'></div>
        </div>
        <div className="login">
            <div className='login-text'>
                <h1>Step 4</h1>
                <span>Finishing...</span>
            </div>

            <form className='form'>
                <div className='row col-12 form-input'>
                    <img src={Profile} alt=''></img>
                    <h3>@OlumideSilas</h3>
                </div>
            </form>
        </div>
        <div className=''>
            <button className='form-button'>
                Finish
            </button>
        </div>
    </div>
    
  );
}

export default Step4;
