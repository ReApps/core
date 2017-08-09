import * as React from 'react';
import InstallBtn from './install-btn';
import AppList from './ListApp';

export default class extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <InstallBtn/>
        <hr/>
        <AppList/>
      </div>
    );
  }
}
