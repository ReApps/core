import * as React from 'react';
import { connect } from 'react-redux';
const VM = require('vm');

class AppView extends React.Component<undefined, undefined> {
    render() {
        const {AppSource} = this.props;
        const AppComponent = compile(AppSource);

        return (
            <AppComponent/>
        )
    }
}

export function compile (Buffer) {
    const code = Buffer.toString();
    return VM.runInThisContext(code).default;
}

function mapStateToProps({core}, {match}) {
    return {
        AppSource: core.apps[match.params.appCode],
    };
}

export default connect(mapStateToProps)(AppView);
