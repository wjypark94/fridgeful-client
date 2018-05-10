import React from 'react';
import '../componentStyles/Header.css';

const Header = (props) => {
    return (
        <div className="container">
            <h1 name="header" className="header">Fridgeful</h1>
            <h2 className="sub-header">Find recipes based on what's in your fridge!</h2>
        </div>
    );
};

export default Header;