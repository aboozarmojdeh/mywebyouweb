import {
    CHANGE_SEARCH_FIELD,
    REQUEST_CATS_PENDING,
    REQUEST_CATS_SUCCESS,
    REQUEST_CATS_FAILED,
    REQUEST_QUOTES_PENDING,
    REQUEST_QUOTES_SUCCESS,
    REQUEST_QUOTES_FAILED,

} from './constants';

const initialStateSearch = {
    searchField: ""
}

export const searchCats = (state = initialStateSearch, action = {}) => {
    // console.log(action.type)
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // return Object.assign({}, state, { searchField: action.payload });
            return { ...state, searchField: action.payload }

        default:
            return state;
    }
}

const initialStateCats = {
    cats: [],
    errorCats: "",
    isPendingCats: false
}

export const requestCats = (state = initialStateCats, action = {}) => {
    switch (action.type) {
        case REQUEST_CATS_PENDING:
            return { ...state, isPendingCats: true }

        case REQUEST_CATS_SUCCESS:
            return { ...state, cats: action.payload, isPendingCats: false }

        case REQUEST_CATS_FAILED:
            return { ...state, errorCats: action.payload, isPendingCats: false }

        default:
            return state;
    }
}


const initialStateQuotes={
    quotes:[],
    errorQuotes: "",
    isPendingQuotes: false
}


export const requestQuotes=(state=initialStateQuotes,action={})=>{
    
        switch (action.type) {
            case REQUEST_QUOTES_PENDING:
                return { ...state, isPendingQuotes: true }
    
            case REQUEST_QUOTES_SUCCESS:
                return { ...state, quotes: action.payload, isPendingQuotes: false }
    
            case REQUEST_QUOTES_FAILED:
                return { ...state, errorQuotes: action.payload, isPendingQuotes: false }
    
            default:
                return state;
        }
    
}