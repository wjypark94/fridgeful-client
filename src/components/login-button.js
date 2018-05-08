import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function LoginButton(){
    return(
        <Router>
            <button><Link to='/login-form'>LogIn</Link></button>
        </Router>
    );
}