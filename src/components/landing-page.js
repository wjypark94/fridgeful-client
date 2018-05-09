import React from 'react';
import '../componentStyles/landing-page.css';


import LoginButton from './login-button';
import SignUpButton from './sign-up-button';

export default function LandingPage(){
    return(
        <div>
            <SignUpButton/>
            <LoginButton/>
        </div>
    );
};