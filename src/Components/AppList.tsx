import * as React from 'react';
import { connect } from 'react-redux';
const {Link} = require('react-router-dom');

class AppList extends React.Component<undefined, undefined> {
    render() {
        const {apps} = this.props;

        return (
            <ul>
                {Object
                    .keys(apps)
                    .filter(Boolean)
                    .map(appName =>  (
                            <li key={appName}>
                                <Link to={`/${appName}`}>{appName}</Link>
                            </li>
                        )
                    )
                }
            </ul>
        );
    }
}

function mapStateToProps({core}) {
    return {...core};
}

export default connect(mapStateToProps)(AppList);
