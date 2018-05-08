import React from 'react';
import './landing-page.css';

import LoginButton from './login-button';
import SignUpButton from './sign-up-button';

export default function LandingPage(){
    return(
        <div className="signlog-buttons">
            <SignUpButton/>
            <LoginButton/>
        </div>
    )
}