const JSONB = require('json-buffer');

export default ({ dispatch, getState }) => {
    return next => {
        return action => {
            next(action);
            localStorage.appState = JSONB.stringify(getState());
        };
    }
}
