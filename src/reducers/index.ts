import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import core from './core';

export default combineReducers({
    routerReducer,
    core,
});
