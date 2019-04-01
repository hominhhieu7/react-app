import { AUTH } from './types';

const initialState = {
    isLoading: true,
    error: null,
    datauser: {},
    theme: ''
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH.RUNNING:
            return { ...state, isLoading: true, datauser: {} }
        case AUTH.SUCCESS:
            return { ...state, isLoading: false, datauser: action.payload, theme: action.payload.theme }
        case AUTH.ERROR:
            return { ...state, isLoading: false, error: action.payload, datauser: {}  }
        case AUTH.LOADTHEME:
            return { ...state, isLoading: false, theme: action.payload }
        default: return state;
    }
}