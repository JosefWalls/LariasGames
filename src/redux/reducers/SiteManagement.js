import axios from "axios";


const initialState = {
    loading: false,
    Title: "",
    Category: "",
    Description: "",
    Header: "",
    Images: [],
    Features: [],
    Publisher: "",
    Price: 0,
    Link: "",
    Country: "",
    Announcements: []
}


const UPDATE_STATE = "UPDATE_STATE";
const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";
const ADD_ANNOUNCEMENT = "ADD_ANNOUNCEMENT";
const GET_ANNOUNCEMENTS = "GET_ANNOUNCEMENTS";

export const updateState = (e) => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}

export const addProduct = (Title, Category, Description, Header, Images, Features, Publisher, Price, Link, Country) => {
    return {
        type: ADD_PRODUCT,
        payload: axios.post("/Scenarios/Add", {
            Title: Title,
            Category: Category,
            Description: Description,
            Images: Images,
            Features: Features,
            Publisher: Publisher,
            Price: Price,
            Link: Link,
            Header: Header,
            Country: Country
        })
    }
}

export const deleteProduct = (scenarioId) => {
    return {
        type: DELETE_PRODUCT,
        payload: axios.delete(`/Scenarios/Delete/${scenarioId}`)
    }
}

export const editProduct = (scenarioId, Title, Description, Publisher, Price, Link, Header) => {
    return {
        type: EDIT_PRODUCT,
        payload: axios.put(`/Scenarios/Edit/${scenarioId}`, {
            Title: Title,
            Description: Description,
            Publisher: Publisher,
            Price: Price,
            Link: Link,
            Header: Header
        })
    }
}

export const addAnnouncement = (Title, Header, Description, Link) => {
    return {
        type: ADD_ANNOUNCEMENT,
        payload: axios.post("Announcements/AddAnnouncement", {
            Title: Title,
            Header: Header,
            Description: Description,
            link: Link
        })
    }
}

export const getAllAnnouncements = () => {
    return {
        type: GET_ANNOUNCEMENTS,
        payload: axios.get("/Announcements/")
    }
}

export default function reducer (state = initialState, action){
    const {type, payload} = action;
    switch(type){
        default:
            return state
        case UPDATE_STATE:
            return {...state, ...payload}
        case `${ADD_PRODUCT}_PENDING`:
            return {...state, loading: true}
        case `${ADD_PRODUCT}_FULFILLED`:
            return {...state, loading: false}
        case `${DELETE_PRODUCT}_PENDING`:
            return {...state, loading: true}
        case `${DELETE_PRODUCT}_FULFILLED`:
            return {...state, loading: false}
        case `${EDIT_PRODUCT}_PENDING`:
            return {...state, loading: true}
        case `${EDIT_PRODUCT}_FULFILLED`:
            return {...state, loading: false}
        case `${ADD_ANNOUNCEMENT}_PENDING`:
            return {...state, loading: true}
        case `${ADD_ANNOUNCEMENT}_FULFILLED`:
            return {...state, loading: false}
        case `${GET_ANNOUNCEMENTS}_PENDING`:
            return {...state, loading: true}
        case `${GET_ANNOUNCEMENTS}_FULFILLED`:
            return {...state, loading: false, Announcements: payload.data}
    }
}