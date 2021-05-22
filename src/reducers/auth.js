import {
    AUTH_ERR_LOG_IN,
    AUTH_ERR_LOG_OUT,
    AUTH_LOGGED_IN,
    AUTH_LOGGING_IN,
    AUTH_LOGGING_OUT,
    AUTH_LOGOUT,
    AUTH_ERR_SIGN_UP,
    AUTH_SIGNING_UP
  } from '../constants/auth';
  
  const INITIAL_STATE = {
    user: null,
    token: null,
    loggingIn: false,
    loggingOut: false,
    errorMessageLogin: null,
    errorMessageLogout: null,
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case AUTH_LOGOUT: {
        return {
          ...INITIAL_STATE,
        };
      }
  
      case AUTH_LOGGING_IN: {
        return {
          ...state,
          errorMessageLogin: action.payload ? null : state.errorMessageLogin,
          errorMessageLogout: null,
          loggingIn: action.payload,
        };
      }
  
      case AUTH_SIGNING_UP: {
        return {
          ...state,
          errorMessageSignUp: action.payload ? null : state.errorMessageSignUp,
          errorMessageLogout: null,
          signingUp: action.payload,
        };
      }

      case AUTH_LOGGING_OUT: {
        return {
          ...state,
          errorMessageLogout: action.payload ? null : state.errorMessageLogout,
          loggingOut: action.payload,
        };
      }
  
      case AUTH_LOGGED_IN: {
        let {token} = action.payload;
        return {
          ...state,
          user: action.username,
          token,
          errorMessageLogin: null,
          loggingIn: false,
        };
      }

      case AUTH_ERR_LOG_IN: {
        return {
          ...state,
          loggingIn: false,
          errorMessageLogin: action.payload,
        };
      }
  
      case AUTH_ERR_LOG_OUT: {
        return {
          ...state,
          loggingOut: false,
          errorMessageLogout: action.payload,
        };
      }

      case AUTH_ERR_SIGN_UP: {
        return {
          ...state,
          signingUp: false,
          errorMessageSignup: action.payload,
        };
      }
  
      default:
        return state;
    }
  }
  