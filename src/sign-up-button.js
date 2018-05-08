import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function SignUpButton(){
    return (
        <button><Link to='/signup'>Sign Up</Link></button>

    )
}