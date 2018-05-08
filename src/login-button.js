import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function LoginButton(){
    return(
        <button><Link to='/dashboard'>LogIn</Link></button>
    );
}