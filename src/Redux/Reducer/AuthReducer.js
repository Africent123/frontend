import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR
} from "../Constants/actionTypes";

const intialState = {
    authenticated : ""
}

export const  AuthReducer = (state =intialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return {...state, user: {
                token: action.message.data.token
            }}
        case LOGIN_ERROR:
            return action.type
        case REGISTRATION_SUCCESS:
            return action.type
        case REGISTRATION_ERROR:
            return action.type
        default:
            return state;
    }
}