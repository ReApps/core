import * as React from 'react';
import { connect } from 'react-redux';
import compile from '../Modules/Compile';
const {Link} = require('react-router-dom');

function AppList ({apps}) {
    return (
        <ul>
            {Object
                .keys(apps)
                .filter(Boolean)
                .map(appHash => {
                    const appInstance = compile(apps[appHash]);
                    const appName = appInstance.name;

                    return (
                        <li key={appHash}>
                            <Link to={`/${appHash}`}>{appName}</Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}

function mapStateToProps({core}) {
    return {
        apps: {...core.apps}
    };
}

export default connect(mapStateToProps)(AppList);
