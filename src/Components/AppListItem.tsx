import Apps from '../Modules/Apps';
const {Link} = require('react-router-dom');

export default function AppListItem ({appHash}) {
    const AppComponent = Apps[appHash];
    const appName = AppComponent.name;

    return (
        <li>
            <Link to={`/${appHash}`}>
                {appName}
            </Link>
        </li>
    )
}
