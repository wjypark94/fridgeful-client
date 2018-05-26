import React, {Component} from 'react';
import '../componentStyles/Header.css';
import { animateScroll as scroll } from 'react-scroll';

export default class Header extends Component {

    scrollToMain(){
        scroll.scrollTo(950);
    }

    render(){
        return (
            <div className="container-header">
                <div className="js-start-display" id="start-page">
                    <header className="row">
                        <h1 className="logo-h1">Fridgeful</h1>
                        <p className="header-p">Find recipes based on what's in your fridge!</p>
                    </header>
                </div>

                <div className="header-buttons">
                    <button onClick={this.scrollToMain} className="start-button">
                        Learn more and get started!
                    </button>
                </div>
            </div>
        );
    }
};

