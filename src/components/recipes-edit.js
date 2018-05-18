import React from 'react';
import $ from 'jquery';

const Edit = (props) => {
    return (
        <div class="row">
        <div class="col-3">
            <form class="new-recipe-form">
              <div name="new-recipe-input row">
                  <input class="col-12" placeholder="Recipe Place" aria-label="title-input" type="text" name="recipe-title" id="recipe-title" autocomplete="off"/>
                  <textarea id="todolist" rows="8" cols="60" aria-label="text-area" class="recipe-entry col-12" placeholder="Write any comments/reviews..."></textarea>
              </div>

                <div class="submit col-3">
                  <button type="submit" class="publish">Update</button>
                </div>
            </form>
        </div>
    </div>
    );
};
export default Edit;