import React, {Component} from 'react';
import '../componentStyles/RecipeInfo.css';
import $ from 'jquery';
import { API_BASE_URL } from '../config';

//GET RECIPE ENTRIES
function getRecipeEntries(callbackFn) {
     $.ajax({
       url: `${API_BASE_URL}/recipelist/user/${localStorage.getItem('userId')}`,
       type: 'GET',
       dataType: 'json',
   
       success: data => {
         if(data) {
           let results = data;
          //console.log('we are getting the data!')
           //console.log(results);
           callbackFn(results);
          //console.log(data.recipe);     
         }
       }
     });
   }


   function displayRecipeEntries(data) {
    for (var i = 0; i < data.recipe.length; i++){
        $('.recipe-results').append(`
        <div class="col-8" id="${data.recipe[i].id}">
        <button class="btn row">${data.recipe[i].title}</button>
          <div class="acd-content col-12">
          <img class="recipe-image" src="${data.recipe[i].img}">
          <p class="recipe-content">${data.recipe[i].content}</p>
          <button id="${data.recipe[i].id}" class="delete-btn">Delete</button><button id="${data.recipe[i].id}" class="edit-btn">Edit</button>
        <form id="edit-form" class="edit-form">
          <h4 class="edit-form-title"> Any comments about this recipe? </h4>
          <input type="text" class="edit-form-input">
          <button type="button" id="submit-edit" data-title="${data.recipe[i].title}" data-id="${data.recipe[i].id}" data-content="${data.recipe[i].content}"> Submit</button>
        </form>
          </div>
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
    window.localStorage.setItem('recipe', $(this).siblings('#raw-data').text())
    //window.location = '/edit-form';
    $("#edit-form").toggle();
   });



  
$(document).on('click', '#submit-edit', function (e) {
    var btn = e.target;
    let currentId = btn.getAttribute('data-id');
    let currentTitle = btn.getAttribute('date-title');
    //console.log(currentContent);
    const recipeContent = $('.edit-form-input').val().trim();
    //console.log(recipeContent);
    //console.log('this is the new content: '+ recipeContent);
    //console.log(currentId);
    
    updateRecipeRequest(currentId, currentTitle, recipeContent);
    //addNewRecipe();
    //console.log(btn);
    //console.log(btn.id);
   });

   /*$(document).on('click', '#submit-edit', function(e){
     console.log('this is pushing through')
   })
   */


   

function updateRecipeRequest(id, title, content) {


    $.ajax({
        method: 'PUT',
        url: `${API_BASE_URL}/recipelist/${id}`,
        data: JSON.stringify({
          id: id,
          title: title,
          content: content,
        }),
        contentType: 'application/json',
        dataType: 'json',
        success: result => {
            try{
            console.log("it's updating!!!");
           window.location = "/recipes-page";
            }
            catch(e){
                console.log(e)
                console.log('its not working');
            }
        }        
    });
}


 //delete the brew entries

 function deleteRecipeEntries(data) {
    for (var i = 0; i < data.recipe.length; i++) {
      $('.delete-btn').on('click', function(event) {
        let recipeId = $(this).attr('id');

        //console.log(recipeId);
        $.ajax({
          url: `${API_BASE_URL}/recipelist/${recipeId}`,
          type: 'DELETE',
          dataType: 'json',
          contentType: 'application/json',
  
          success: data => {
            console.log("it worked!")
                    window.location = 'recipes-page';
          }
        });
      });
    }
  }

  function getAndDeleteRecipeEntries() {
    getRecipeEntries(deleteRecipeEntries);
  }

  $(getAndDeleteRecipeEntries);


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

export default RecipeInfo;