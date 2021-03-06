import React, {Component} from 'react';
import MissionIcon from '../images/mission-icon.png';
import '../componentStyles/MissionStatement.css';
import { animateScroll as scroll } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';


export default class MissionStatement extends Component {

    scrollToTop(){
        scroll.scrollTo(0);
    }

    render(){
    return (
        <div className="mission-row">
            <div className="col-12">
                <div className="mission-text">
                    <Fade left>
                    <h4 className="mission-h4"> MISSION STATEMENT <img className="about-icon" src={MissionIcon} alt="how-icon"/> </h4>
                    </Fade>
                </div>

                <Fade>
                <Pulse>
                <div className="col-5 description">
                    <div className="description-paragraph-1">
                        <p className="mission-paragraph-1">
                        Our mission today is the same as it's always been: 
                        </p>
                    </div>
                </div>

                <div className="col-5 description">
                    <div className="description-paragraph-2">
                        <p className="mission-paragraph-2">
                        That everyone who uses Fridgeful will work together towards decreasing the amount of food waste in the world.
                        </p>
                    </div>
                </div>

                <div className="col-5 description">
                    <p className="mission-paragraph-3">
                    For so long, people thought Fridgeful was just about making food. But really, we're about saving food. Roughly 40% of the food in the United States is never eaten, amounting to $165 billion a year in food waste. Most of the waste comes in the home with families throwing out approximately 25% of the food and beverages they buy. 
                    </p>
                </div>
                </Pulse>
                </Fade>

                  <div className="col-5 description">
                    <Fade bottom>
                    <p className="mission-paragraph-4">
                    Food is simply too good to waste. Let's start with Fridgeful. 
                    </p>
                    </Fade>
                </div>
            </div>

            <hr className="mission-hr"/>

            <div className="arrow-wrapper">
                <a className="arrow" role="link" aria-label="scroll up">
                    <i onClick={this.scrollToTop} className="fa fa-arrow-circle-up smooth-container" aria-hidden="true"></i>
                </a>
            </div>
            
        </div>
        );
    }
}

