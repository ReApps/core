import { connect } from 'react-redux';
import compile from '../Modules/Compile';

function AppView ({appSource}) {
    const AppComponent = compile(appSource);

    return <AppComponent/>;
}

function mapStateToProps({core}, {match}) {
    return {
        appSource: core.apps[match.params.appHash],
    };
}

export default connect(mapStateToProps)(AppView);
