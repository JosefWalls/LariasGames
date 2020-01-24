import Axios from "axios";


const initalState = {
    loading: false,
    products: [],
    Title: "",
    Category: "",
    Description: "",
    Features: "",
    Publisher: "",
    Price: 0,
    Link: "",
    Country: ""
}

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const UPDATE_STATE = "UPDATE_STATE";
const GET_ALL_SCENARIOS = "GET_ALL_SCENARIOS";

export const getAllProducts = () => {
    return {
        type: GET_ALL_PRODUCTS,
        payload: Axios.get("/Product/")
    }
}

export const updateState = (e) => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}

export const getAllScenarios = () => {
    return {
        type: GET_ALL_SCENARIOS,
        payload: Axios.get("/Product/Scenarios")
    }
}

export default function reducer (state = initalState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_ALL_PRODUCTS}_PENDING`:
            return {...state, loading: true}
        case `${GET_ALL_PRODUCTS}_FULFILLED`:
            return {...state, loading: false, products: payload.data}
        case `${GET_ALL_SCENARIOS}_PENDING`:
            return {...state, loading: true}
        case `${GET_ALL_SCENARIOS}_FULFILLED`:
            return {...state, loading: false, products: payload.data}
        case `${UPDATE_STATE}`:
            return {...state, ...payload}
        default:
            return state
    }
}