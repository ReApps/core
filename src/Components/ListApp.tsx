import * as React from 'react';
import { connect } from 'react-redux';
const VM = require('vm');

class ListApp extends React.Component<undefined, undefined> {
    render() {
        const {apps} = this.props;

        return (
            <div>
                {Object
                    .keys(apps)
                    .filter(Boolean)
                    .map(appName => {
                        const AppComponent = compile(apps[appName]);

                        return (
                            <section key={appName}>
                                <h3>{appName}</h3>
                                <div>
                                    <AppComponent/>
                                </div>
                            </section>
                        );
                    })
                }
            </div>
        );
    }
}

function compile (Buffer) {
    const code = Buffer.toString();
    return VM.runInThisContext(code).default;
}

function mapStateToProps({core}) {
    return {...core};
}

export default connect(mapStateToProps)(ListApp);
