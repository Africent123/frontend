import { combineReducers } from "redux";

import { AuthReducer } from "./Reducer/AuthReducer";
import { MovieListReducer } from "./Reducer/MoviesReducer";
import {ManageProfileReducer} from "./Reducer/ManageProfileReducer"
import {AdminReducer} from "./Reducer/AdminReducer"

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Movies: MovieListReducer,
  getDetails: ManageProfileReducer,
  Admin: AdminReducer,
  // AdminFetching: AdminFetchingReducer
});

export default rootReducer;
