import React, {Component} from 'react';
import '../componentStyles/RecipeInfo.css';
import { connect } from 'react-redux';

import $ from 'jquery';
import { API_BASE_URL } from '../config';

function getRecipeEntries(callbackFn) {
     $.ajax({
       url: `${API_BASE_URL}/recipelist/user/${localStorage.getItem('userId')}`,
       type: 'GET',
       dataType: 'json',
   
       success: data => {
         if(data) {
           let results = data;
           console.log('we are getting the data!')
           console.log(results);
           callbackFn(results);
           console.log(data.recipe);     
         }
       }
     });
   }
  
   function displayRecipeEntries(data) {
    for (var i = 0; i < data.recipe.length; i++){
        $('.recipe-results').append(`
        <p>${data.recipe[i].title}</p>
        <img class="recipe-image" src="${data.recipe[i].img}">
        <p class="recipe-content">${data.recipe[i].content}</p>
        `);
    }
  }

  function getAndDisplayRecipeEntries() {
    getRecipeEntries(displayRecipeEntries);
  }

  $(getAndDisplayRecipeEntries);


class RecipeInfo extends Component {
    render(){
    return (
        <div className="container row">
            <h1 className="recipe-title">My Recipes</h1>
            <p className="recipe-text">Here are your recipes</p>
            <div  className="recipe-results">
            </div>
        </div>
    )
 }
}

export default RecipeInfo;

