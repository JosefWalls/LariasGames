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
    Country: "",
    filterCountry: ""
}

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const UPDATE_STATE = "UPDATE_STATE";
const GET_ALL_SCENARIOS = "GET_ALL_SCENARIOS";
const FILTER_SCENARIOS_COUNTRY = "FILTER_SCENARIOS_COUNTRY";

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
        payload: Axios.get("/Scenarios/")
    }
}

export const filterScenariosCountry = (country) => {
    return {
        type: FILTER_SCENARIOS_COUNTRY,
        payload: Axios.get(`/Scenarios/Filter/${country}`)
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
        case `${FILTER_SCENARIOS_COUNTRY}_PENDING`:
            return {...state, loading: true}
        case `${FILTER_SCENARIOS_COUNTRY}_FULFILLED`:
            return {...state, loading: false, products: payload.data}
        case `${UPDATE_STATE}`:
            return {...state, ...payload}
        default:
            return state
    }
}