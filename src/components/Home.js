import React, {Component} from 'react';
import '../componentStyles/Home.css';
import AboutSection from './AboutSection';
import Header from './Header';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

class Home extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            "open": false,
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render(){
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
                    <Header/>
                    <Drawer
                      docked={false}
                      width={250}
                      open={this.state.open}
                      onRequestChange={(open) => this.setState({open})}>

                      <AppBar title="Fridgeful" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'dimgrey'}} />

                      <MenuItem containerElement={<Link to="/login-form" />} id="login">Log In</MenuItem>
                      <MenuItem containerElement={<Link to="/sign-up-form" />} id="register">Register</MenuItem>
                  </Drawer>
                  
                    <div className="container">
                        <a href="#about-section" className="arrow down">Down</a>
                    </div>
                </div>

                <div id="about-section" className="instructions-display">
                    <AboutSection/>
                </div>
            </div>
        );
    }
}

export default Home;