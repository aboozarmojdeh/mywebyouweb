import {
    CHANGE_SEARCH_FIELD,
    REQUEST_CATS_PENDING,
    REQUEST_CATS_SUCCESS,
    REQUEST_CATS_FAILED,
    REQUEST_QUOTES_PENDING,
    REQUEST_QUOTES_SUCCESS,
    REQUEST_QUOTES_FAILED,

} from './constants';

import axios from 'axios';


export const setSearchField = (text) => {
    // console.log(text)
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }

}





export const requestCats = ()=>(dispatch) => {
    dispatch({ type: REQUEST_CATS_PENDING });
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(axiosData => dispatch({ type: REQUEST_CATS_SUCCESS, payload: axiosData.data }))
        // .then(axiosData => console.log('cats',axiosData))
        // console.log(axiosData) before proceeding 
        .catch(error => dispatch({ type: REQUEST_CATS_FAILED, payload: error }
        )   
        )

}


export const requestQuotes=()=>(dispatch)=>{
    dispatch({type:REQUEST_QUOTES_PENDING});
    axios.get("https://type.fit/api/quotes")
    // .then(response=>response.json())
        .then(axiosQuotesData => dispatch({ type: REQUEST_QUOTES_SUCCESS, payload: axiosQuotesData.data }))
        // .then(axiosQuotesData => console.log('quotes',axiosQuotesData))
        // console.log(axiosData) before proceeding 
        .catch(error => dispatch({ type: REQUEST_QUOTES_FAILED, payload: error }
        )   
        )

}