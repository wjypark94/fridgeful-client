
import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

import '../componentStyles/login-form.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.handleClose = this._handleClose.bind(this);
  }

  _handleClose() {
    this.setState({ open: false });
  }
  
  cancelButton(){
      window.location = '/'
  }

  render() {
    const actions = [
      <FlatButton
        type="reset"
        label="Reset"
        secondary={true}
        style={{ float: 'left' }}
        />,
        <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose, this.cancelButton}
      />,
      <FlatButton
        type="submit"
        label="Submit"
        primary={true}
        />,
    ];

    return (
      <div className="main-background">
        <AppBar
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            title="Fridgeful"
            className="app-bar"
            style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'black'}}
                  />
        <Dialog
          title="Log In"
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
          style={{textAlign: 'center'}}
          >
          <form onSubmit={(e) => {
              e.preventDefault();
              this.handleClose();

              const username = e.target.username.value;
              const password = e.target.password.value;

              this.props.dispatch(loginUser(username, password));
            }}>
            <h1 class="demo-title">Demo Account</h1>
            <p className="demo-user">User: demo</p>
            <p className="demo-pw">PW: 12345</p>
            <TextField name="username" type="text" hintText="Username" required={true}/><br />
            <TextField name="password" type="password" hintText="Password" required={true}/>
            <div style={{ textAlign: 'right', padding: 10, margin: '24px -24px -24px -24px'}}>
              {actions}
            </div>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default connect()(LoginForm);