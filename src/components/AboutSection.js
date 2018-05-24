import React from 'react';
import '../componentStyles/AboutSection.css';
import '../componentStyles/float-grid.css';

const AboutSection = (props) => {
    return (
        <div className="about-row">
            <div className="col-12">
                <div className="about-text">
                    <h4>HOW IT WORKS</h4>

                </div>

                <div className="col-4 description">
                    <div className="description-paragraph-1">
                        <p className="paragraph">
                            Sign up and create your own personal account with a few easy steps.
                        </p>
                    </div>
                </div>

                <div className="col-4 description">
                    <div className="image-wrapper">
                    </div>

                    <div className="description-paragraph-2">
                        <p className="paragraph">
                            Enter a list of ingredients in the dashboard to search possible recipes.
                        </p>
                    </div>
                </div>

                <div className="col-4 description">
                    <p className="paragraph">
                        Save your recipes to your own database and write your own comments or notes about that recipe!
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;