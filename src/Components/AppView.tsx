import { connect } from 'react-redux';
import Apps from '../Modules/Apps';

function AppView ({appHash}) {
    const AppComponent = Apps[appHash];

    return <AppComponent/>;
}

function mapStateToProps(state, {match}) {
    return {
        appHash: match.params.appHash,
    };
}

export default connect(mapStateToProps)(AppView);
