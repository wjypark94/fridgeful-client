import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';


class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            "open": false,
        };
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render(){
        const actions = [
            <FlatButton
            type="reset"
            label="reset"
            secondary={true}
            style={{float: 'left'}}
            />,
            <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
            />,
            <FlatButton
            type="submit"
            label="Submit"
            primary={true}
            />,
        ];
    

    return(
       <div>
        <MenuItem id="login" onClick={this.handleOpen}>Login</MenuItem>
        <Dialog
            title="Log In"
            modal={true}
            open={this.state.open}
            autoScrollBodyContent={true}
        >
            <form onSubmit={(e) => {e.preventDefault(); this.handleClose(); }}>
              <TextField name="username" hintText="Username" required={true}/>
              <TextField name="password" hintText="Password" required={true}/>
              <div style={{textAlign: 'right', padding: 8}}>
                  {actions}
              </div>
            </form>
        </Dialog>
       </div>
    )
}
}

export default LoginForm;