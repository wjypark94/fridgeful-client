import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './landing-page.css';


export default function LandingPage(){
    return(
        <div className="signup">
            <button> SignUp </button>
            <button><Link to='/dashboard'>Login</Link> </button>
        </div>
    )
}