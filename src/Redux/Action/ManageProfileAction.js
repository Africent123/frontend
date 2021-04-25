
import * as types from "../Constants/actionTypes";
import decode from "jwt-decode";
import axiosIntance from "../../helpers/axios";





export const FetchingProfileSuccess = (message) => {
    return {
        type: types.FETCHING_PROFILE_DETAILS_SUCCESS,
        message
    }
}

export const FetchingProfileError = (message) => {
    return{
        type: types.FETCHING_PROFILE_DETAILS_ERROR,
        message
    }
}

export const EdtingProfileSuccess = (message) => {
    return{
        type: types.EDITED_SUCCESS,
        message
    }
}

export const EdtingProfileError = (message) => {
    return{
        type: types.EDITED_ERROR,
        message
    }
}

export const GetProfileDetail = (id) => {
    return dispatch => {
        return axiosIntance.get(`/api/user/profile/${id}`).then(response => {
            //console.log(response)
          return dispatch(FetchingProfileSuccess(response.data))
      })
      .catch(error => {
           return dispatch(FetchingProfileError(error))
      })
    }
}

export const EditProfile = (data, id) => {
    return dispatch => {
        const { name, email, phoneNumber } = data
        return axiosIntance.put(`/api/user/profile/edit/${id}`, {
          name,
          email,
          phoneNumber
        }).then(response => {
            return dispatch(EdtingProfileSuccess(response))
        }).catch(error => {
            return dispatch(EdtingProfileError(error))
        })
    }
}