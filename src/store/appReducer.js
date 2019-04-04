import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import {commentsReducer} from './Comments/reducer';

export const appReducer = combineReducers({
    auth: authReducer,
    comments: commentsReducer
})