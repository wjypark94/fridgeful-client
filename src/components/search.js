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
        <div class="result col-3">
            <h2 class="recipe-name"> ${result.recipe["label"]} </h2>
            <img src="${result.recipe.image}">   
            <h3>${result.recipe.calories}</h3>
            <h3>${result.recipe.dietLabels}</h3>
            <h3>${result.recipe.ingredientLines}</h3>
         
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

            <div id="js-results">
            </div>
        </div>
    );
};

export default Search;