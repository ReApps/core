import * as React from 'react';
import InstallBtn from './install-btn';

export default class extends React.Component<undefined, undefined> {
  render() {
      const {children} = this.props;

    return (
      <div>
        <InstallBtn/>
        <hr/>
        {children}
      </div>
    );
  }
}
