import React from 'react';
import '../componentStyles/AboutSection.css';

const AboutSection = (props) => {
    return (
        <div className="row">
            <div className="display-container">
                <h1 className="title">How It Works</h1>

                <div className="col-4">
                    <div className="box about">
                        <h2 className="card-title">About</h2>
                        <p className="card-content">Fridgeful will help you search recipes with ingredients in your fridge</p>
                    </div>
                </div>

                <div className="col-4">
                    <div className="box how-to">
                        <h2 className="card-title">How To</h2>
                        <p className="card-content">First, sign up and then add your recipes in the dashboard. Then, browse the recipes and add the recipes. </p>
                    </div>
                </div>

                <div className="col-4">
                    <div className="box get-started">
                        <h2 className="card-title">Get Started!</h2>
                        <p className="card-content">Create a free account now and get started!</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;