import React, {Component} from 'react';
import '../componentStyles/AboutSection.css';
import '../componentStyles/float-grid.css';
import HowIcon from '../images/howitworks-icon.png';
import DataBaseIcon from '../images/database-icon.png';
import RecipeIcon from '../images/recipe-icon.png';
import RegisterIcon from '../images/register-icon.png';
import {animateScroll as scroll} from 'react-scroll';

export default class AboutSection extends Component {

    scrollToMission(){
        scroll.scrollTo(1600);
    }

    render(){
    return (
        <div className="about-row">
            <div className="col-12">
                <div className="about-text">
                    <h4 className="about-h4"> HOW IT WORKS <img className="about-icon" src={HowIcon} alt="how-icon"/> </h4>
                </div>

                <div className="col-4 description">
                    <div className="description-paragraph-1">
                        <p className="about-paragraph">
                            Sign up and create your own personal account with a few easy steps. Hit the handle bar to register.
                        </p>
                        <img className="register-icon" src={RegisterIcon} alt="register-icon"/>
                    </div>
                </div>

                <div className="col-4 description">
                    <div className="image-wrapper">
                    </div>

                    <div className="description-paragraph-2">
                        <p className="about-paragraph">
                            Enter a list of ingredients in the dashboard to search several possible recipes.
                        </p>
                        <img className="recipe-icon" src={RecipeIcon} alt="recipe-icon"/>
                    </div>
                </div>

                <div className="col-4 description">
                    <p className="about-paragraph">
                        Save your recipes to your own database and write your own comments or notes about that recipe!
                    </p>
                    <img className="database-icon" src={DataBaseIcon} alt="how-icon"/>
                </div>
            </div>

            <div className="arrow-wrapper">
                <a className="arrow" role="link" aria-label="scroll down">
                    <i onClick={this.scrollToMission} className="fa fa-arrow-circle-down smooth-container" aria-hidden="true"></i>
                </a>
            </div>
            <hr className="about-hr"/>
        </div>
        );
    }
};
