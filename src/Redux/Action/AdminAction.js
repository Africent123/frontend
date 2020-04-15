import axios from "axios";
import * as types from "../Constants/actionTypes";

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
    return axios
      .get("https://kannywoodtv.live/api/cp/allusers")
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
    return axios
      .get("https://kannywoodtv.live/api/user/allusers")
      .then(response => {
        console.log(response);
        return dispatch(fetchingUsersSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        return dispatch(fetchingUsersError(error));
      });
  };
};

export const CpUserRegistration = userData => {
  return dispatch => {
    let { providerName, email, phoneNumber, password, password2 } = userData;
    return axios
      .post("https://kannywoodtv.live/api/cp/register", {
        providerName,
        email,
        phoneNumber,
        password,
        password2
      })
      .then(response => {
        console.log(response, "auth action");
        return dispatch(UserRegisterCpSuccess(response));
      })
      .catch(error => {
        console.log(error);
        return dispatch(UserRegisterCpFail(error));
      });
  };
};

export const UserBlockCp = id => {
  return dispatch => {
    return axios
      .put(`https://kannywoodtv.live/api/cp/block/${id}`)
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
    return axios
      .put(`https://kannywoodtv.live/api/user/unblock/${id}`)
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
    return axios
      .put(`https://kannywoodtv.live/api/user/block/${id}`)
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
    return axios
      .put(`https://kannywoodtv.live/api/user/unblock/${id}`)
      .then(response => {
        return dispatch(unblocked_User_Success(response));
      })
      .catch(error => {
        return dispatch(unblocked_User_Failed(error));
      });
  };
};
