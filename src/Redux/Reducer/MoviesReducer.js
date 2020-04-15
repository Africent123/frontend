import * as types from "../Constants/actionTypes";
import InitialState from "../InitialState";

export const MovieListReducer = (state = [], action) => {
    switch(action.type){
        case types.LOADING_MOVIES_SUCCESS:
            return [...state, ...action.Movies]
        case types.LOADING_MOVIES_ERROR:
            return [...state, {movies: action.error}]
        default:
            return state;
    }
};
