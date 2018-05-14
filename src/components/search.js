import React from 'react';
import '../componentStyles/Search.css';

const Search = (props) => {
    return (
        <div class="dashboard-display">
            <header class="row">
                <h1 class="logo">Fridgeful Dashboard</h1>
                <p>Let's get started and search some recipes</p> 
            </header>
            <form action="#" class="recipes-form" id="recipe-query-form">
                <input placeholder="Enter ingredients.." aria-label="input" class="recipe-query"/>
                <button type="submit" aria-label="search class" class="submit-button"> Search </button>
            </form>
        </div>
    );
};

export default Search;