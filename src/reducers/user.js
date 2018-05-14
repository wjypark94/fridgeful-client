const initialState = {
    data: {},
    authToken: null,
    userId: null,
  }
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_USER_SUCCESSFUL':
        return {
          ...state,
          data: action.user
        }
  
      case 'LOGIN_USER_SUCCESSFUL':
        return {
          ...state,
          authToken: action.token,
          userId: action.userId
        }
  
      default:
        return state;
    }
  }
  
  export default user;