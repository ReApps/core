import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const {dialog} = require('electron').remote;
import * as actions from '../Actions';

const InstallBtn = ({install}) => (
  <button
    onClick={() => {
        const files = dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']})
        install(files[0]);
    }}
  >
    Установить
  </button>
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(InstallBtn);
