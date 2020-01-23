import Axios from "axios";



const initalState = {
    loading: false,
    Username: "",
    Password: "",
    Developer: []
}


const LOGIN_DEVELOPER = "LOGIN_DEVELOPER";
const UPDATE_STATE = "UPDATE_STATE";

export const loginDeveloper = (Username, Password) => {
    return {
        type: LOGIN_DEVELOPER,
        payload: Axios.post("/Developer/Signin", {
            Username: Username,
            Password: Password
        })
    }
}


export const updateState = (e) => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}


export default function reducer (state = initalState, action){
    const {type, payload} = action;
    switch(type){
        default: 
            return state
        case UPDATE_STATE:
            return  {...state, ...payload}
        case `${LOGIN_DEVELOPER}_PENDING`:
            return {...state, loading: true}
        case `${LOGIN_DEVELOPER}_FULFILLED`:
            console.log(payload.data)
            return {...state, loading: false, Developer: payload.data}
    }
}