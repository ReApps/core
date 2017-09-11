import { connect } from 'react-redux';
import AppListItem from './AppListItem';

function AppList ({apps}) {
    return (
        <ul>
            {apps
                .map(appHash => (
                    <AppListItem
                        key={appHash}
                        appHash={appHash}
                    />
                ))
            }
        </ul>
    );
}

function mapStateToProps({core}) {
    return {
        apps: core.apps
    };
}

export default connect(mapStateToProps)(AppList);
