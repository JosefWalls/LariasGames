import axios from "axios";


const initialState = {
    loading: false,
    Title: "",
    Category: "",
    Description: "",
    Header: "",
    Images: [],
    Features: "",
    Publisher: "",
    Price: 0,
    Link: "",
    Country: ""
}


const UPDATE_STATE = "UPDATE_STATE";
const ADD_PRODUCT = "ADD_PRODUCT";

export const updateState = (e) => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}

export const addProduct = (Title, Category, Description, Header, Images, Features, Publisher, Price, Link) => {
    return {
        type: ADD_PRODUCT,
        payload: axios.post("/Product/Add", {
            Title: Title,
            Category: Category,
            Description: Description,
            Images: Images,
            Features: Features,
            Publisher: Publisher,
            Price: Price,
            Link: Link,
            Header: Header
        })
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
    }
}