import '../styles/step1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Step1() {
  return (
    <div className=''>
        <div className='col-12 line'>
            <div className='lines'></div>
            <div className='lines lineo'></div>
            <div className='lines lineo'></div>
            <div className='lines lineo'></div>
            <div className='lines lineo'></div>
        </div>
        <div className="login">
            <div className='login-text'>
                <h1>Step 1</h1>
                <span>Let's start with the basics</span>
            </div>

            <form className='form'>
                <div className='row col-12 form-input'>
                    <div className='name row'>
                        <input className='col-6' type='text' placeholder='First Name'></input>
                        <input className='col-6' type='text' placeholder='Last Name'></input>
                    </div>
                    <div className='details row'>
                        <input className='col-12' type='username' placeholder='Username'></input>
                        <input className='col-12' type='email' placeholder='Email'></input>
                        <input className='col-12' type='password' placeholder='Password'></input>
                        <input className='col-12' type='password' placeholder='Confirm Password'></input>

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

export default Step1;
