import axios from "axios";


const initalState = {
    loading: true,
    ActiveForums: [],
    Forum: []
}

const GET_ACTIVE_FORUMS = "GET_ACTIVE_FORUMS";
const GET_FORUM = "GET_FORUM"

export const getForums = () => {
    return {
        type: GET_ACTIVE_FORUMS,
        payload: axios.get("/Forum/")
    }
}

export const getForum = (forumId) => {
    return {
        type: GET_FORUM,
        payload: axios.get(`/Forum/${forumId}`)
    }
}

export default function reducer(state = initalState, action){
    const {type, payload} = action;
    switch(type){
        default: 
            return state
        case `${GET_ACTIVE_FORUMS}_PENDING`:
            return {...state, loading: true}
        case `${GET_ACTIVE_FORUMS}_FULFILLED`:
            return {...state, loading: false, ActiveForums: payload.data}
        case `${GET_FORUM}_PENDING`:
            return {...state, loading: true}
        case `${GET_FORUM}_FULFILLED`:
            return {...state, loading: false, Forum: payload.data}
    }
}