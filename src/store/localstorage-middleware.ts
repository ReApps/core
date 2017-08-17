const JSONB = require('json-buffer');

export default ({ dispatch, getState }) => {
    // const reState = JSONB.parse(localStorage.appState);
    // console.log(reState);
    // dispatch();
    return next => {
        return action => {
            next(action);
            localStorage.appState = JSONB.stringify(getState());
        };
    }
}
