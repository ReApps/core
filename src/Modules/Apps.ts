import compile from '../Modules/Compile';

const Apps = {};

const handler = {
    get: function (Apps, appHash) {
        if (!(appHash in Apps)) {
            const appSource = localStorage[`app${appHash}`];
            Apps[appHash] = compile(appSource);
        }

        return Apps[appHash];
    }
};

export default new Proxy(Apps, handler);
