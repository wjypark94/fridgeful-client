import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

import '../componentStyles/dashboard.css';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

import Search from './search';
import Results from './results';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "open": false,
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});


    render() {
        return (
            <div>
                <div className="main-display">
                <AppBar
                      iconClassNameRight="muidocs-icon-navigation-expand-more"
                      title="Fridgeful"
                      onLeftIconButtonClick={this.handleToggle}
                      className="app-bar"
                      style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'black' }}
                  />
                  <Search/>
                  <Results/>
                    <Drawer
                      docked={false}
                      width={250}
                      open={this.state.open}
                      onRequestChange={(open) => this.setState({open})}>

                      <AppBar title="Fridgeful" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'dimgrey'}} />

                      <MenuItem containerElement={<Link to="/" />} id="home">Home</MenuItem>
                      <MenuItem containerElement={<Link to ="dashboard"/>} id="dashboard">Dashboard</MenuItem>
                      <MenuItem containerElement={<Link to ="/recipes-page"/>} id="recipes">Recipes</MenuItem>
                      <MenuItem onClick={() => this.props.dispatch(logoutUser())} id="logout">Log Out</MenuItem>
                  </Drawer>
                  
                </div>
            </div>
        );
    }
}


export default connect()(Dashboard);