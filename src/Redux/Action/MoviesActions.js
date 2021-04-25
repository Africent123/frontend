
import * as types from "../Constants/actionTypes";
import { type } from "os";
import axiosIntance from "../../helpers/axios";

export const moviesFetched = Movies => {
  return {
    type: types.LOADING_MOVIES_SUCCESS,
    Movies
  };
};

export const moviesFetchedError = error => {
    return{
        type: types.LOADING_MOVIES_ERROR,
        error
    }
}

export const beginFetching = () => {
    return{
        type: "FETCHING API",
        loading: false
    } 
}

export const fetchingMovies = (data) => {
    return dispatch => {
        dispatch(beginFetching(true))
        return axiosIntance.get(`/api/movies/all`).then(response => {
            //console.log(response)
            return dispatch(moviesFetched(response.data))
        })
        .catch(error => {
            //console.log(error)
            return dispatch(moviesFetchedError(error))
        })
    }
}