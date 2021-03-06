import Axios from "axios";


const initalState = {
    loading: false,
    product: [],
    Title: "",
    Category: "",
    Description: "",
    Features: "",
    Publisher: "",
    Price: 0,
    Link: "",
    Country: "",
    filterCountry: "",
    scenarios: []
}

const UPDATE_STATE = "UPDATE_STATE";
const GET_ALL_SCENARIOS = "GET_ALL_SCENARIOS";
const FILTER_SCENARIOS_COUNTRY = "FILTER_SCENARIOS_COUNTRY";
const GET_SCENARIO = "GET_SCENARIO";

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

export const getScenario = (scenarioId) => {
    return {
        type: GET_SCENARIO,
        payload: Axios.get(`/Scenarios/${scenarioId}`)
    }
}

export default function reducer (state = initalState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_ALL_SCENARIOS}_PENDING`:
            return {...state, loading: true}
        case `${GET_ALL_SCENARIOS}_FULFILLED`:
            return {...state, loading: false, scenarios: payload.data}
        case `${GET_SCENARIO}_PENDING`:
            return {...state, loading: true}
        case `${GET_SCENARIO}_FULFILLED`:
            return {...state, loading: false, product: payload.data}
        case `${UPDATE_STATE}`:
            return {...state, ...payload}
        default:
            return state
    }
}