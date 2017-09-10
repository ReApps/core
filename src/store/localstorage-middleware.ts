export default ({ dispatch, getState }) => {
    return next => {
        return action => {
            next(action);
            localStorage.appState = JSON.stringify(getState());
        };
    }
}
