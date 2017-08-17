import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import localStorageMiddleware from './localstorage-middleware';
const JSONB = require('json-buffer');

export const history = createHashHistory();
const router = routerMiddleware(history);

const enhancer = applyMiddleware(
    thunk,
    router,
    localStorageMiddleware,
);

const savedState = JSONB.parse(localStorage.appState || '{}');

export function configureStore(initialState = savedState) {
    return createStore(rootReducer, initialState, enhancer);
}
