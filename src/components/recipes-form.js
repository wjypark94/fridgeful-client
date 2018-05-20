import React from 'react';
import $ from 'jquery';
import { API_BASE_URL } from '../config';

//put request for updating recipe
/*
function updateRecipeRequest(id, title, content) {
    if (window.localStorage.getItem('recipe')) {
      console.log(id);
      console.log(title);
      console.log(content);
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
}
//adding recipe with values in form

function addNewRecipe() {
    if (window.localStorage.getItem('recipe')) {
      const recipe = JSON.parse(window.localStorage.getItem('recipe'));
      const recipeId = recipe.id;
      const recipeTitle = $('#recipe-title').val().trim();
      const recipeContent = $('.recipe-entry').val().trim();
  

      updateRecipeRequest(recipeId, recipeTitle, recipeContent);
    }
  
  }
*/

//function for autofilling the form for recipes in the edit-form page
  function fillForm() {

    if (window.localStorage.getItem('recipe')) {
        const recipe = JSON.parse(window.localStorage.getItem('recipe'));
        //console.log(recipe);  
        $('#recipe-title').val(recipe.title);
        $('.recipe-entry').val(recipe.content);

    }
    }
    
    $(fillForm);


 function testClick(){
     $('.testing').submit(function(event){
         console.log('hello thi sis clicking')
     })
 }

 $(testClick);


const Form = (props) => {
    return (
        <div className="row">
        <div className="col-3">
            <form className="new-recipe-form">
            <div name="new-recipe-input row">
                <input className="col-12" placeholder="Recipe Place" aria-label="title-input" type="text" name="recipe-title" id="recipe-title"/>
                <textarea id="todolist" rows="8" cols="60" aria-label="text-area" className="recipe-entry col-12" placeholder="Write any comments/reviews..."></textarea>
            </div>

                <div className="submit col-3">
                <button type="submit" className="publish">Update</button>
                </div>
            </form>

                <button type="submit" className="testing">Testing</button>
                
        </div>
        </div>
    )
}

export default Form;