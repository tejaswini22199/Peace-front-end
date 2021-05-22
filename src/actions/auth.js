import {
    AUTH_ERR_LOG_IN,
    AUTH_ERR_LOG_OUT,
    AUTH_LOGGED_IN,
    AUTH_LOGGING_IN,
    AUTH_LOGGING_OUT,
    AUTH_LOGOUT,
    AUTH_SIGNING_UP,
    AUTH_ERR_SIGN_UP,
  } from "../constants/auth";
  import {navigate} from "../services/navRef";
  import {userService} from "../services/userService";
  
  export const loggingIn = (loggingIn) => ({
    type: AUTH_LOGGING_IN,
    payload: loggingIn
  });
  
  export const loggedIn = (data, username) => ({
    type: AUTH_LOGGED_IN,
    payload: data,
    username
  });
  
  export const errorLogIn = (errorMessage) => ({
    type: AUTH_ERR_LOG_IN,
    payload: errorMessage,
  });
  

  export const signingUp = (signingUp) => ({
    type: AUTH_SIGNING_UP,
    payload: signingUp
  });

  
  export const errorSignUp = (errorMessage) => ({
    type: AUTH_ERR_SIGN_UP,
    payload: errorMessage,
  });

  export const login = (username, password) => (dispatch) => {
    dispatch(loggingIn(true));
    userService.login(username, password).then(async (res) => {
      await dispatch(loggedIn(res.data, String(username.value)));
      await navigate('Dashboard');
    }).catch((err) => {
      dispatch(errorLogIn('Wrong username or password'));
    }).finally(() => {
      dispatch(loggingIn(false));
    });
  };
  
  export const signup = (username, email, password) => (dispatch) => {
    dispatch(signingUp(true));
    userService.signup(username, email, password).then(async (res) => {
      await dispatch(loggedIn(res.data), username);
      await navigate('Dashboard');
    }).catch((err) => {
      dispatch(errorSignUp('Username already exists'));
    }).finally(() => {
      dispatch(signingUp(false));
    });
  };

  export const loggedOut = () => ({
    type: AUTH_LOGOUT,
  });
  
  export const loggingOut = (lOut) => ({
    type: AUTH_LOGGING_OUT,
    payload: lOut,
  });
  
  export const errorLogOut = (errorMessage) => ({
    type: AUTH_ERR_LOG_OUT,
    payload: errorMessage,
  });
  
  export const logout = () => async (dispatch, getState) => {
    dispatch(loggingOut(true));
    await userService.logout(getState).then((res) => {
      dispatch(loggedOut());
    }).catch((err) => {
      dispatch(errorLogOut('Error logging out.'));
    }).finally(() => {
      dispatch(loggingOut(false));
    });
  };
  