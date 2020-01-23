import {combineReducers, createStore, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";

import ProductReducer from "./reducers/Product";
import DeveloperReducer from "./reducers/Developer";

const root = combineReducers ({
    ProductReducer,
    DeveloperReducer
})


export default createStore(root, applyMiddleware(promise));