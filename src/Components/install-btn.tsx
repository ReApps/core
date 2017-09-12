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
            const files = dialog
                .showOpenDialog({
                    properties: ['openFile'],
                    filters: [{name: 'package.json', extensions: ['json']}],
                });
            files && files[0] && install(files[0]);
        }}
    >
        Установить
    </Button>
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(InstallBtn);
