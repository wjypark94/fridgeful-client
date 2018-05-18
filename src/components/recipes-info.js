import React, {Component} from 'react';
import '../componentStyles/RecipeInfo.css';
import { connect } from 'react-redux';


class RecipeInfo extends Component {
    render(){
    return (
        <div className="container row">
            <h1 className="recipe-title">My Recipes</h1>
            <p className="recipe-text">Here are your recipes</p>
        </div>
    )
 }
}

export default RecipeInfo;
