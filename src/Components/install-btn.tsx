import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const {dialog} = require('electron').remote;
const { Button } = require('react-desktop/macOs');
import * as actions from '../Actions';

const InstallBtn = ({install}) => (
    <Button
        color="blue"
        onClick={() => {
            const files = dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']})
            files[0] && install(files[0]);
        }}
    >
        Установить
    </Button>
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(InstallBtn);
