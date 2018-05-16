import React from 'react';
import '../componentStyles/Search.css';
import $ from 'jquery';

const API_KEY = "05657dfe9f118702432a2379f889bdf2";
const APP_ID ="4ad3534f";
const SEARCH_URL = "https://api.edamam.com/search";


  function getDataFromRecipeApi() {
    let input = $('#recipe-query').val();
      $.ajax({
          url: SEARCH_URL,
          data: {
            q: `${input}`,
            app_id: APP_ID,
            app_key: API_KEY,
            from: 0,
            to: 6
          },
          dataType: 'json',
          type: 'GET',
          success: function (data) {
              try {
                  console.log(data);
                  var hitsHtml = "";
                  for (var i = 0; i < data.hits.length; i++){
                      var eachHit = data.hits[i];
                      var eachHitHtml = displayResults(eachHit)
                      hitsHtml += eachHitHtml;
                  }
                  $('#js-results').html(hitsHtml);
              }
              catch (e) {
                  console.log(e);
              }
          }
        })
  };

  function displayResults(result){
      return `
    <div class="col s12 m4">
    <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class=" activator js-img" src="${result.recipe.image}">
          <span class="card-title">${result.recipe.label}</span>
        </div>
        <div class="card-content">
           <span class="card-title activator grey-text text-darken-4"><i class="material-icons right">more_vert</i></span>
           </div>
        <div class="card-reveal">
        <span class="card-title grey-text text-darken-4"><i class="small material-icons right">close</i></span>
        <p class="card-txt">${result.recipe.dietLabels}</p>
        <p class="card-txt" id="card-cal">${Math.round(result.recipe.calories)} Calories</p>
        <p class="card-txt" id="card-carb">${Math.round(result.recipe.totalNutrients.CHOCDF.quantity)}<span>${result.recipe.totalNutrients.CHOCDF.unit} Carbs per serving</span></p>
        <p class="card-txt-lines">${result.recipe.ingredientLines}</p>
       </div>
        <div class="card-action">
          <a href="${result.recipe.url}" target="_blank">Try It Now!</a>
          <button class="save-button"> SAVE IT! </button>
        </div>
      </div>
    </div>
    </div>
      
      `
  }

  function searchForm() {
    $('.recipes-form').submit(function (event) {
        event.preventDefault();
        console.log('Hello')
        getDataFromRecipeApi();
   
    });
}

$(searchForm);


const Search = (props) => {
    return (
        <div className="dashboard-display">
            <header className="row">
                <h1 className="logo">Fridgeful Dashboard</h1>
                <p>Let's get started and search some recipes</p> 
            </header>
            <form action="#" className="recipes-form" id="recipes-form">
                <input type="text" placeholder="Enter ingredients.." aria-label="input" className="recipe-query" id="recipe-query"/>
                <button type="submit" aria-label="search class" className="submit-button"> Search </button>
            </form>
            <div id="js-results" className="row">
            </div>
        </div>
    );
};
export default Search;