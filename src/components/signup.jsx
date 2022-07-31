import '../styles/signup.css';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';

function SignUp() {

    const [key, setKey] = useState('step1');

    return (
        <div className="">
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                <Tab eventKey="step1" title="1" className='col'>
                    <Step1 />
                </Tab>
                <Tab eventKey="step2" title="2" className='col'>
                    <Step2 />
                </Tab>
                <Tab eventKey="step3" title="3" className='col'>
                    <Step3 />
                </Tab>
                <Tab eventKey="step4" title="4" className='col'>
                    <Step4 />
                </Tab>
            </Tabs>
        </div>
    );
}

export default SignUp;
