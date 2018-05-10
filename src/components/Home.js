import React, {Component} from 'react';
import '../componentStyles/Home.css';
import AboutSection from './AboutSection';
import Header from './Header';

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
               
                    <Header/>
                  
                    <div className="container">
                        <a href="#display-cards" className="arrow down">Down</a>
                    </div>
                </div>

                <div id="display-cards" className="instructions-display">
                    <AboutSection/>
                </div>
            </div>
        );
    }
}

export default Home;