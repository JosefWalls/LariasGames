import {combineReducers, createStore, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";

import ProductReducer from "./reducers/Product";

const root = combineReducers ({
    ProductReducer
})


export default createStore(root, applyMiddleware(promise));