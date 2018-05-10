import React from 'react';
import '../componentStyles/RecipeInfo.css';


const RecipeInfo = (props) => {
    return (
        <div className="recipe-container">
            <h1 className="recipe-title">My Recipes</h1>
            <p className="recipe-text">Here are your recipes</p>
        </div>
    )
}

export default RecipeInfo;