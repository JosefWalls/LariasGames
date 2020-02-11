import {combineReducers, createStore, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";

import ProductReducer from "./reducers/Product";
import DeveloperReducer from "./reducers/Developer";
import SiteManagementReducer from "./reducers/SiteManagement";
import ForumReducer from "./reducers/Forum";

const root = combineReducers ({
    ProductReducer,
    DeveloperReducer,
    SiteManagementReducer,
    ForumReducer
})


export default createStore(root, applyMiddleware(promise));