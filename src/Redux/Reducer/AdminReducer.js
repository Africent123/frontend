import * as types from "../Constants/actionTypes";
// import InitialState from "../InitialState";

const InitialState = {
    AllUsers: []

}

export const AdminReducer = (state = [], action) => {
    //console.log(action, "Action")
    switch (action.type) {
        case types.FETCHING_CP_USERS_SUCCESS:
            return [...state, ...action.data]
        case types.FETCHING_CP_USERS_FAIL:
            return [...state, action.error]
        case types.FETCHING_ALL_USERS_SUCCESS:
            //console.log("here data from reducer")
            return [...state, ...action.data]
        case types.FETCHING_ALL_USERS_FAIL:
            //console.log("here error from reducer", action.data)
            return [...state, action.error]
        case types.BLOCK_USER_SUCCESS:
            return [...state, action.data]
        case types.BLOCK_USER_FAIL:
            return [...state, action.error]
        case types.REGISTRATING_CPUSER_SUCCESS:
            return [...state, action.data]
        case types.REGISTRATING_CPUSER_FAIL:
            return [...state, action.error]
        case types.LOGIN_CPUSER_SUCCESS:
            return [...state, action.data]
        case types.LOGIN_CPUSER_ERROR:
            return [...state, action.error]
        default:
            //console.log("here data")
            return state;
    }
}

// export const AdminFetchingReducer = (state = [], action) => {
//     console.log(action, "Action")
//     switch(action.type){
//         case types.FETCHING_ALL_USERS_SUCCESS:
//             console.log("here data from reducer")
//             return [...state, InitialState.AllUsers= action.data]
//         case types.FETCHING_ALL_USERS_FAIL:
//                 console.log("here error from reducer", action.data)
//             return [...state, action.error]
//         default:
//             console.log("here data")
//             return state;
//     }
// }
