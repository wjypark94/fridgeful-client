import React, {Component} from 'react';
import HowIcon from '../images/howitworks-icon.png';
import DataBaseIcon from '../images/database-icon.png';
import RecipeIcon from '../images/recipe-icon.png';
import RegisterIcon from '../images/register-icon.png';
import MissionIcon from '../images/mission-icon.png';
import '../componentStyles/MissionStatement.css';
import { animateScroll as scroll } from 'react-scroll';


export default class MissionStatement extends Component {

    scrollToTop(){
        scroll.scrollTo(0);
    }

    render(){
    return (
        <div className="mission-row">
            <div className="col-12">
                <div className="mission-text">
                    <h4 className="mission-h4"> MISSION STATEMENT <img className="about-icon" src={MissionIcon} alt="how-icon"/> </h4>
                </div>

                <div className="col-5 description">
                    <div className="description-paragraph-1">
                        <p className="paragraph">
                        Our mission today is the same as it's always been: 
                        </p>
                    </div>
                </div>

                <div className="col-5 description">
                    <div className="description-paragraph-2">
                        <p className="paragraph">
                        That everyone who uses Fridgeful will work together towards decreasing the amount of food waste in the world.
                        </p>
                    </div>
                </div>

                <div className="col-5 description">
                    <p className="paragraph">
                    For so long, people thought Fridgeful was just about making food. But really, we're about saving food. Roughly 40% of the food in the United States is never eaten, amounting to $165 billion a year in food waste. Most of the waste comes in the home with families throwing out approximately 25% of the food and beverages they buy. 
                    </p>
                </div>

                  <div className="col-5 description">
                    <p className="paragraph">
                    Food is simply too good to waste. Let's start with Fridgeful. 
                    </p>
                </div>
            </div>
            <div class="arrow-wrapper">
                <a class="arrow" role="link" aria-label="scroll up">
                    <i onClick={this.scrollToTop} class="fa fa-arrow-circle-up smooth-container" aria-hidden="true"></i>
                </a>
            </div>
            <hr className="mission-hr"/>
        </div>
        );
    }
}

