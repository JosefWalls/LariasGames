import Axios from "axios";


const initalState = {
    loading: false,
    products: []
}

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";


export const getAllProducts = () => {
    return {
        type: GET_ALL_PRODUCTS,
        payload: Axios.get("/Product/")
    }
}

export default function reducer (state = initalState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_ALL_PRODUCTS}_PENDING`:
            return {...state, loading: true}
        case `${GET_ALL_PRODUCTS}_FULFILLED`:
            return {...state, loading: false, products: payload.data}
        default:
            return state
    }
}