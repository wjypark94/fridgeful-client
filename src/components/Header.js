import React from 'react';
import '../componentStyles/Header.css';

const Header = (props) => {
    return (
        <div className="container">
            <div className="js-start-display" id="start-page">
                <header className="row">
                    <h1 className="logo">Fridgeful</h1>
                    <p className="header-p">Find recipes based on what's in your fridge!</p>
                </header>
            </div>
        </div>
    );
};

export default Header;

