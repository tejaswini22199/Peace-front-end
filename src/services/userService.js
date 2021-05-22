import axios from 'axios';
import { API_URL } from '../config/constants';
import {resetAuthAsyncStorage, setAuthAsyncStorage} from "./getAuthAsyncStorage";


function login(username, password) {
  const username_value = String(username.value)
  const passvalue = String(password.value)

  let formData = new FormData();    //formdata object

  formData.append('username', username_value);   //append the values with key, value pair
  formData.append('password', passvalue); //
  //console.log(formData)

  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/sign_in/login/`, formData)
    .then(async (response) => {
      try {
        await setAuthAsyncStorage(response, username_value);
        resolve(response);
        //window.location.reload(false);
      } catch (e) { reject(e) }
    }).catch((err) => {
      reject(err)
    });
  });
}

function signup(username, email, password) {
  const username_value = String(username.value)
  const email_value = String(email.value)
  const passvalue = String(password.value)
  let formData = new FormData();    //formdata object

  formData.append('username', username_value);   //append the values with key, value pair
  formData.append('password', passvalue); //
  formData.append('email', email_value); //
  console.log(formData)

  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/sign_in/register/`, formData)
    .then(async (response) => {
      try {
        //console.log(response)
        await setAuthAsyncStorage(response, username_value);
        resolve(response);
       // window.location.reload(false);
      } catch (e) { reject(e) }
    }).catch((err) => {
      reject(err)
    });
  });
}

async function logout(getState) {
  return new Promise((resolve, reject) => {
    const currentState = getState();
    const { token } = currentState.auth;
    //console.log(`Token ${token}`)
    axios.post(`${API_URL}/sign_in/logout/`,{},{
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then(async (response) => {
      resolve(response);
      await resetAuthAsyncStorage();
    }).catch((err) => reject(err));
  });
}

export const userService = {
  login,
  logout,
  signup
};
