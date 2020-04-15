import * as types from "../Constants/actionTypes";

export const ManageProfileReducer = (state = [], action) => {
    console.log(action.message, "from action")
    switch(action.type){
        case types.EDITED_SUCCESS:
            return{...state, message: action.message}
        case types.EDITED_ERROR:
            return{...state, message: action.message}
        case types.FETCHING_PROFILE_DETAILS_SUCCESS:
                console.log(action.message, "data is here")

            return{...state, data: action.message}
        case types.FETCHING_PROFILE_DETAILS_ERROR:
            console.log(action.message, "error")
            return{...state, message: action.message}
        default:
                console.log(action.message, "data is empty")

            return {...state};            
    }
}