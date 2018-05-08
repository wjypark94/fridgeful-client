import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from './dashboard';
import LandingPage from './landing-page'
import SignUp from './sign-up';


export default function App(props) {
  //render() {
    return (
      <Router>
        <div className='app'>
          <header>
            <h1> Fridgeful </h1>
          </header>
          <main>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/signup' component={SignUp}/>
          </main>
        </div>
      </Router>
    );
  //}
}

//export default App;
