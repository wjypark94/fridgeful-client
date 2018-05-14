import React from 'react';
import '../componentStyles/Search.css';

const Search = (props) => {
    return (
        <div className="search-form">
            <form action="#" class="recipes-form" id="recipe-query-form">
                <input placeholder="Enter ingredients.." aria-label="input" class="recipe-query"/>
                <button type="submit" aria-label="search class" class="submit-button"> Search </button>
            </form>
        </div>
    );
};

export default Search;