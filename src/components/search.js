import React from 'react';
import '../componentStyles/Search.css';
import $ from 'jquery';

const API_KEY = "05657dfe9f118702432a2379f889bdf2";
const APP_ID ="4ad3534f";
const SEARCH_URL = "https://api.edamam.com/search";
const state = {
    from: 0,
    to: 3
};

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
                  let results;
              }
              catch (e) {
                  console.log(e);
              }
          }
        })
  };

  function displayResults(result){
      console.log(result);
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
        <div class="dashboard-display">
            <header class="row">
                <h1 class="logo">Fridgeful Dashboard</h1>
                <p>Let's get started and search some recipes</p> 
            </header>
            <form action="#" class="recipes-form" id="recipes-form">
                <input type="text" placeholder="Enter ingredients.." aria-label="input" class="recipe-query" id="recipe-query"/>
                <button type="submit" aria-label="search class" class="submit-button"> Search </button>
            </form>

            <div id="js-results">
            </div>
        </div>
    );
};

export default Search;