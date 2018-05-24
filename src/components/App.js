import React, { Component } from 'react';
import '../componentStyles/App.css';
import {Router, Route} from 'react-router-dom';
import Home from './Home';
import Dashboard from './dashboard';
import RecipesPage from './recipes-page';
import history from '../history';
import LoginForm from './login-form';
import { loginUserSuccess } from '../actions';
import { connect } from 'react-redux';


class App extends Component {
  componentDidMount() {
    if(localStorage.getItem('authToken')) {
      const authToken = localStorage.getItem('authToken')
      const userId = localStorage.getItem('userId')

      this.props.dispatch(loginUserSuccess(userId, authToken))
    }
  }

  render() {
    return (
      <Router history={history}>
          <div className="app">
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/recipes-page" component={RecipesPage}/>
            <Route exact path="/login-form" component={LoginForm} />
          </div>
      </Router>
    );
  }
}



export default connect()(App);


