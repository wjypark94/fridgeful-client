import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './dashboard';
import LandingPage from './landing-page';
import SignUpForm from './sign-up-form';
import LoginForm from './login-form';
import {Link} from 'react-router-dom';

export default function App(props) {
    return (
      <Router>
        <div className='app'>
          <header>
            <h1><Link to='/' className="home-title"> Fridgeful </Link></h1>
          </header>
          <main>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/sign-up-form' component={SignUpForm}/>
            <Route exact path='/login-form' component={LoginForm}/>
          </main>
        </div>
      </Router>
    );
}

