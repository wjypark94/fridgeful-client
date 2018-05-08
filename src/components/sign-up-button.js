import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


export default function SignUpButton(){
    return (
        <Router>
          <button><Link to='/sign-up-form'>Sign Up</Link></button>
        </Router>
    )
}