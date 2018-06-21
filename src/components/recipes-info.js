import React, {Component} from 'react';
import '../componentStyles/RecipeInfo.css';
import $ from 'jquery';

import { getRecipeEntries } from '../actions';
import { updateRecipeRequest } from '../actions';
import { deleteRecipeEntries } from '../actions';


class RecipeInfo extends Component {
    render(){
    return (
        <div className="container row">
            <h1 className="recipe-title">My Recipes</h1>
            <div  className="recipe-results">
            </div>
        </div>
    )
 }
}

//GET RECIPE ENTRIES

function displayRecipeEntries(data) {
    //console.log(data);
    for (var i = 0; i < data.recipe.length; i++){
        $('.recipe-results').append(`
        <div class="col-8" id="${data.recipe[i].id}">
        <button class="btn row">${data.recipe[i].title}</button>
          <div class="acd-content col-12">

          <img class="recipe-image" src="${data.recipe[i].img}">
          <p class="recipe-content">${data.recipe[i].content}</p>
          <button id="${data.recipe[i].id}" class="delete-btn">Delete</button><button id="${data.recipe[i].id}" class="edit-btn">Edit</button>
  
          </div>
        <form id="${data.recipe[i].id}-edit" class="edit-form">
          <h4 class="edit-form-title"> Any comments about this recipe? </h4>
          <input type="text" class="edit-form-input" id="${data.recipe[i].id}-comment">
          <button type="button" id="submit-edit" data-title="${data.recipe[i].title}" data-id="${data.recipe[i].id}" data-content="${data.recipe[i].content}"> Submit</button>
        </form>
        </div>
        `);
    }
  }

  function getAndDisplayRecipeEntries() {
    getRecipeEntries(displayRecipeEntries);
  }

  $(getAndDisplayRecipeEntries);

   
   $(document).on('click', '.btn', function () {
    $(this).toggleClass("max").next().slideToggle(500);
   });
   

   //EDIT RECIPE ENTRIES
   $(document).on('click', '.edit-btn', function(event) {
    //window.localStorage.setItem('recipe', $(this).siblings('#raw-data').text())
    //window.location = '/edit-form';
    var btn = event.target;
    let currentId = btn.getAttribute('id');
    console.log(currentId);
    $("#"+ currentId + "-edit").toggle();
   });

$(document).on('click', '#submit-edit', function (e) {
    var btn = e.target;
    let currentId = btn.getAttribute('data-id');
    let currentTitle = btn.getAttribute('date-title');
    const recipeContent = $("#" + currentId + "-comment").val().trim();
    console.log(recipeContent);
    //console.log('this is the new content: '+ recipeContent);
    //console.log(currentId);
    updateRecipeRequest(currentId, currentTitle, recipeContent);
   });

 //delete the recipe entries

  function getAndDeleteRecipeEntries() {
    getRecipeEntries(deleteRecipeEntries);
  }

  $(getAndDeleteRecipeEntries);


export default RecipeInfo;
