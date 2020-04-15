import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

export const configureStore = (initialState) => {
    const composeEnhacers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnhacers(applyMiddleware(thunk))
    )
}