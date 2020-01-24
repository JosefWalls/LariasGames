import {combineReducers, createStore, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";

import ProductReducer from "./reducers/Product";
import DeveloperReducer from "./reducers/Developer";
import SiteManagementReducer from "./reducers/SiteManagement";

const root = combineReducers ({
    ProductReducer,
    DeveloperReducer,
    SiteManagementReducer
})


export default createStore(root, applyMiddleware(promise));