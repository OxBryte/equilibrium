import '../styles/step1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Step2() {
  return (
    <div className=''>
        <div className='col-12 line'>
            <div className='lines '></div>
            <div className='lines'></div>
            <div className='lines lineo'></div>
            <div className='lines lineo'></div>
            <div className='lines lineo'></div>
        </div>
        <div className="login">
            <div className='login-text'>
                <h1>Step 2</h1>
                <span>Setting vital details...</span>
            </div>

            <form className='form'>
                <div className='row col-12 form-input'>
                    <div className='details row'>
                        <input className='col-12' type='number' placeholder='Phone Number'></input>
                        <input className='col-12' type='text' placeholder='Gender'></input>
                        <input className='col-12' type='password' placeholder='Country'></input>
                        <input className='col-12' type='password' placeholder='Postal Code'></input>

                    </div>
                    <h2>By continuing, you agree to the GoFundMe terms and acknowledge receipt of our privacy notice.</h2>
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

export default Step2;
