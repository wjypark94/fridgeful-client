import React, { Component } from 'react';
import '../componentStyles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import SignUpForm from './sign-up-form';
import LoginForm from './login-form';

import Home from './Home';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';

class App extends Component {
  
  render(){
    return (
      <Router>
        <div className='app'>
            <Route exact path='/' component={Home}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/sign-up-form' component={SignUpForm}/>
            <Route exact path='/login-form' component={LoginForm}/>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
