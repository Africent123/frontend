
import * as types from "../Constants/actionTypes";
import axiosIntance from "../../helpers/axios"

const fetchingCpSuccess = data => {
  return {
    type: types.FETCHING_CP_USERS_SUCCESS,
    data
  };
};

const fetchingCpError = message => {
  return {
    type: types.FETCHING_CP_USERS_FAIL,
    message
  };
};

export const loginCpSuccess = message => {
  return { type: types.LOGIN_CPUSER_SUCCESS, message };
};

export const loginCpError = error => {
  return { type: types.LOGIN_CPUSER_ERROR, error };
};

const UserRegisterCpSuccess = data => {
  return {
    type: types.REGISTRATING_CPUSER_SUCCESS,
    data
  };
};

const UserRegisterCpFail = message => {
  return {
    type: types.REGISTRATING_CPUSER_FAIL,
    message
  };
};

const UserBlockedCpSuccess = data => {
  return {
    type: types.BLOCK_USER_SUCCESS,
    data
  };
};

const UserBlockedCpFailed = message => {
  return {
    type: types.BLOCK_USER_FAIL,
    message
  };
};

const UserBlockedSuccess = data => {
  return {
    type: types.BLOCK_USER_SUCCESS,
    data
  };
};

const UserBlockedFailed = message => {
  return {
    type: types.BLOCK_USER_FAIL,
    message
  };
};

const unblocked_User_Success = data => {
  return {
    type: types.BLOCK_USER_SUCCESS,
    data
  };
};

const unblocked_User_Failed = message => {
  return {
    type: types.BLOCK_USER_FAIL,
    message
  };
};

const fetchingUsersSuccess = data => {
  return {
    type: types.FETCHING_ALL_USERS_SUCCESS,
    data
  };
};

const fetchingUsersError = message => {
  return {
    type: types.FETCHING_ALL_USERS_FAIL,
    message
  };
};

export const fetchingContentProviders = () => {
  return dispatch => {
    return axiosIntance
      .get(`/api/cp/allusers`)
      .then(response => {
        return dispatch(fetchingCpSuccess(response.data));
      })
      .catch(error => {
        return dispatch(fetchingCpError(error));
      });
  };
};

export const fetchingUsers = () => {
  return dispatch => {
    return axiosIntance
      .get(`/api/cp/user/allusers`)
      .then(response => {
        //console.log(response);
        return dispatch(fetchingUsersSuccess(response.data));
      })
      .catch(error => {
        //console.log(error);
        return dispatch(fetchingUsersError(error));
      });
  };
};

export const login = (credentials, route) => {
  //console.log(route, "the routes chnages")
  return dispatch => {
      //console.log(credentials.body)
    let { email, password } = credentials.body;
    //console.log("body of the request", credentials.body)
    return axiosIntance
      .post(`/api/cp/login`, { email, password })
      .then(response => {
        //console.log(response)
        return dispatch(loginCpSuccess(response));
      })
      .catch(error => {
        //console.log(error, "Error from Auth action")
        return dispatch(loginCpError(error));
      });
  };
};

export const CpUserRegistration = userData => {
  return dispatch => {
    let { providerName, email, phoneNumber, password, password2 } = userData;
    return axiosIntance
      .post(`/api/cp/register`, {
        providerName,
        email,
        phoneNumber,
        password,
        password2
      })
      .then(response => {
        //console.log(response, "auth action");
        return dispatch(UserRegisterCpSuccess(response));
      })
      .catch(error => {
        //console.log(error);
        return dispatch(UserRegisterCpFail(error));
      });
  };
};

export const UserBlockCp = id => {
  return dispatch => {
    return axiosIntance
      .put(`/api/cp/block/${id}`)
      .then(response => {
        return dispatch(UserBlockedCpSuccess(response));
      })
      .catch(error => {
        return dispatch(UserBlockedCpFailed(error));
      });
  };
};

export const unblockCp = id => {
  return dispatch => {
    return axiosIntance
      .put(`/api/cp/user/unblock/${id}`)
      .then(response => {
        return dispatch(unblocked_User_Success(response));
      })
      .catch(error => {
        return dispatch(unblocked_User_Failed(error));
      });
  };
};



export const UserBlock = id => {
  return dispatch => {
    return axiosIntance
      .put(`/api/cp/user/block/${id}`)
      .then(response => {
        return dispatch(UserBlockedSuccess(response));
      })
      .catch(error => {
        return dispatch(UserBlockedFailed(error));
      });
  };
};

export const unblockUser = id => {
  return dispatch => {
    return axiosIntance
      .put(`/api/cp/user/unblock/${id}`)
      .then(response => {
        return dispatch(unblocked_User_Success(response));
      })
      .catch(error => {
        return dispatch(unblocked_User_Failed(error));
      });
  };
};
