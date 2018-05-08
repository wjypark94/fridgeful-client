import React from 'react';

import {BrowserRouter as Link} from 'react-router-dom';

export default function LoginButton(){
    return(
        <button><Link to='/dashboard'>LogIn</Link></button>
    );
}