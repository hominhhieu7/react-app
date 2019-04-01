import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer'

export const appReducer = combineReducers({
    auth: authReducer,
})