import { COMMENTS } from './types';

const initialState = {
    isLoading: true,
    ERROR: null,
    comments: [],
    dataSearch: []
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENTS.RUNNING:
            return { ...state, isLoading: true, ERROR: null, comments: [] }
        case COMMENTS.SUCCESS:
            return { ...state, isLoading: false, ERROR: null, comments: action.payload }
        case COMMENTS.ERROR:
            return { ...state, isLoading: false, ERROR: action.error, comments: [] }
        case COMMENTS.SEARCH:
        console.log(action);
        
            return { ...state, isLoading: false, dataSearch: action.payload }
        default: return state
    }
}