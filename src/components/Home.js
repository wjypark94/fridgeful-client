import React, {Component} from 'react';
import '../componentStyles/Home.css';
import AboutSection from './AboutSection';
import Header from './Header';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RegistrationForm from './sign-up-form';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import MissionStatement from './mission-statement';


export default class Home extends Component{ 
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
                <div className="main-home-display">
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

                      <AppBar title="Fridgeful" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: 'black'}} />

                      <MenuItem containerElement={<Link to="/login-form" />} id="login">Log In</MenuItem>
                      <RegistrationForm/>
                  </Drawer>      
                </div>

                <div id="about-section" className="instructions-display">
                    <AboutSection/>
                    <MissionStatement/>
                </div>
                
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

