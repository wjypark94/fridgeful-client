import React from 'react';
import '../componentStyles/sign-up-form.css';

const {API_BASE_URL} = require('../config');

export default class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
        }
    }

    signUp(){
        console.log('calling sign up function!!')
        const newUser = {
            username: this.state.username,
            password: this.state.password,
        }
       console.log(JSON.stringify(newUser));
       // eslint-disable-next-line
       fetch(`${API_BASE_URL}/sign-up`, {
            body: JSON.stringify(newUser),
            cache: 'default',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'content-type': 'application/json',
            },
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            refferer: 'no-referrer',

        }).then(response => response.json())
        .then((res)=>{
            console.log(res);
            return res;
        }) .then(user=>{
            return Promise.resolve(console.log(user))
        }).catch(err => console.log(err))
    }

    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value})
    }
    render(){
      return(
          <form id='sign-up-form' onSubmit={e => {e.preventDefault(); this.signUp()}}>
              <label htmlFor='userName'>Username</label>
              <input id='userName' value={this.state.username} onChange={e => this.handleUsernameChange(e)} />

              <label htmlFor='password'>Password</label>
              <input id='password' value={this.state.password} onChange={e => this.handlePasswordChange(e)} />

              <button type='submit' htmlFor='sign-up-form'>Submit</button>
          </form>
      );
  }
}