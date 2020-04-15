import axios from "axios";

import * as types from "../Constants/actionTypes";

export const loginSuccess = message => {
  return { type: types.LOGIN_SUCCESS, message };
};

export const loginError = error => {
  return { type: types.LOGIN_ERROR, error };
};

export const registrationSuccess = message => {
  return { type: types.REGISTRATION_SUCCESS, message };
};

export const registrationError = error => {
  return { type: types.REGISTRATION_SUCCESS, error };
};

export const Authenticated = payload => {
  return {type: types.AUTHENTICATED, payload}
}

export const notAuthenticated = message => {
  return {type: types.NOT_AUTHENTICATED, message}
}

export const login = (credentials, route) => {
  console.log(route, "the routes chnages")
  return dispatch => {
      console.log(credentials.body)
    let { email, password } = credentials.body;
    console.log("body of the request", credentials.body)
    return axios
      .post(`https://kannywoodtv.live/api/${route}/login`, { email, password })
      .then(response => {
        console.log(response)
        return dispatch(loginSuccess(response));
      })
      .catch(error => {
        console.log(error, "Error from Auth action")
        return dispatch(loginError(error));
      });
  };
};

export const Authencation = (token) => {
  console.log(token, "****")
  return dispatch => {
    console.log(token, "#####")
      return {type: types.AUTHENTICATED, payload:token}
  }
}

export const registration = userData => {
  console.log(userData, "from reg");
  return dispatch => {
    let { name, email, phoneNumber, password, password2 } = userData;
    return axios
      .post("https://kannywoodtv.live/api/user/register", {
        name,
        email,
        phoneNumber,
        password,
        password2
      })
      .then(response => {
        console.log(response, "auth action");
        return dispatch(registrationSuccess(response));
      })
      .catch(error => {
        console.log(error);
        return dispatch(registrationError(error));
      });
  };
};
