export default function (state = {apps: []}, {type, apps}) {
    switch (type) {
        case 'INSTALL_SUCCESS':
            return {
                ...state,
                apps
            };
        default:
            return state;
    }
}
