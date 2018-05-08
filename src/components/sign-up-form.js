import React from 'react';
import './sign-up-form.css';

export default function SignUpForm(){
    return(
        <form id='sign-up-form'>
            <label for='userName'> Username</label>
            <input id='userName'/>

            <label for='password'>Password</label>
            <input id='password'/>

            <button type='button' for='sign-up=form'> Submit</button>
        </form>
    );
}