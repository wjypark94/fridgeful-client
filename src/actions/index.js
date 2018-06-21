import { API_BASE_URL } from '../config';
import history from '../history';
import $ from 'jquery';

export const REGISTER_USER_SUCCESSFUL = 'REGISTER_USER_SUCCESSFUL';
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESSFUL,
  user
});

export const registerUser = (username, password) => dispatch => {
  fetch(`${API_BASE_URL}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(res => res.json())
  .then(json => {
      dispatch(registerUserSuccess(json))
      console.log(json);
      window.location = '/login-form'
  })
  .catch(error => console.log(error))
}

export const LOGIN_USER_SUCCESSFUL = 'LOGIN_USER_SUCCESSFUL';
export const loginUserSuccess = (userId, token) => ({
  type: LOGIN_USER_SUCCESSFUL,
  userId,
  token
});

export const loginUser = (username, password) => dispatch => {
  fetch(`${API_BASE_URL}/auth/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(res => res.json())
  .then(response => {
    localStorage.setItem('authToken', response.authToken)
    localStorage.setItem('userId', response.userId)
    dispatch(loginUserSuccess(response.userId, response.authToken))
    history.push('/dashboard')
    console.log('successful!!!!!!!')
  })
  .catch(error => {
    alert('Wrong Username or Password!!!!!')
    window.location = '/'
  })
}

export const logoutUser = () => dispatch => {
  localStorage.clear()
  window.location = '/'
}

//API CALL

//Recipe Actions


export const addRecipe = (userId, title, img, content ) => {
  fetch(`${API_BASE_URL}/recipelist/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
    body: JSON.stringify({ userId, title, img, content}),
  })
  .then(res => res.json())
  //.then(recipes => {
    //dispatch(fetchRecipesSuccess(recipes))
  // })

  console.log('success this action is working')
  //.catch(error => console.log(error))
}


export const getRecipeEntries = (callbackFn) => {
  fetch(`${API_BASE_URL}/recipelist/user/${localStorage.getItem('userId')}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
  })
  .then(res => res.json())
  //console.log('this action is working i think!')
  .then(recipes => {
    //console.log(recipes);
    callbackFn(recipes);
    //dispatch(fetchRecipesSuccess(recipes))
  })
  //.catch(error => console.log(error))
}

export const updateRecipeRequest = (id, title, content) => {
  fetch(`${API_BASE_URL}/recipelist/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
    body: JSON.stringify({id, title, content}),
    dataType: 'json',
  })
  //.then(res => res.json())
  console.log('edit action is working!');
  window.location = "/recipes-page";
}


//delete recipe entry


export const deleteRecipeEntries = (data) => {
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

//GET RECIPE ENTRIES
/*export const getRecipeEntries = (callbackFn) => {
  $.ajax({
    url: `${API_BASE_URL}/recipelist/user/${localStorage.getItem('userId')}`,
    type: 'GET',
    dataType: 'json',

    success: data => {
      if(data) {
        let results = data;
       console.log('we are getting the data!')
        //console.log(results);
        callbackFn(results);
       //console.log(data.recipe);     
      }
    }
  });
}
*/


/*
export const updateRecipeRequest = (id, title, content) => {
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
*/


/*
export const addRecipe = (userId, title, img, content ) => {
  $.ajax({
      method: 'POST',
      url: `${API_BASE_URL}/recipelist`,
      data: JSON.stringify({
          userId: localStorage.getItem('userId'),
          title: title,
          img: img,
          content: content,
      }),
      contentType: 'application/json',
      dataType: 'json',
      success: result => {
          console.log(result);
      }
  })
}

*/
