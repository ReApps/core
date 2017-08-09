const bundler = require('../Bundler');

export function install(path) {
    return (dispatch) => {
        bundler(path, (apps) => {
            dispatch(installSuccess(apps));
        });
    };
}

function installSuccess(apps) {
    return {
        type: 'INSTALL_SUCCESS',
        apps
    };
}
