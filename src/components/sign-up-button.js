import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';


export default function SignUpButton(){
    return (
        <div>
          <button><Link to='/sign-up-form'>Sign Up</Link></button>
        </div>
    )
}