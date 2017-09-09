import * as React from 'react';
import { connect } from 'react-redux';
const VM = require('vm');
const { addMiddleware } = require('redux-dynamic-middlewares');

class AppView extends React.Component<undefined, undefined> {
    render() {
        const {AppSource} = this.props;
        const AppComponent = compile(AppSource);

        return <AppComponent/>;
    }
}

export function compile (Buffer) {
    const code = `
        (function(addMiddleware) {
            return ${Buffer.toString()}
        })
    `;
    const run = VM.runInThisContext(code);
    const moduleInsance = run(addMiddleware);

    return moduleInsance.default;
}

function mapStateToProps({core}, {match}) {
    return {
        AppSource: core.apps[match.params.appCode],
    };
}

export default connect(mapStateToProps)(AppView);
