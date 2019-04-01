import { createStore, applyMiddleware } from 'redux';
import { appReducer } from './appReducer';
import Thunk from 'redux-thunk';
import { logger } from 'redux-logger';
export const ConfigureStore = () => {
    const store = createStore(
        appReducer,
        applyMiddleware(Thunk,logger)
    )
    return store;
} 