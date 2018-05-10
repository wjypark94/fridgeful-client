import React from 'react';
import '../componentStyles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import Dashboard from './Dashboard';

import SignUpForm from './sign-up-form';
import LoginForm from './login-form';

import Home from './Home';

export default function App(props) {
    return (
      <Router>
        <div className='app'>
          <main>
            <Route exact path='/' component={Home}/>
            
            <Route exact path='/sign-up-form' component={SignUpForm}/>
            <Route exact path='/login-form' component={LoginForm}/>
          </main>
        </div>
      </Router>
    );
}
//<Route exact path='/dashboard' component={Dashboard}/>

