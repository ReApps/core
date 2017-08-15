import * as React from 'react';
import { Switch, Route } from 'react-router';
import InstallBtn from './install-btn';
import BackLink from './BackLink';

export default class extends React.Component<undefined, undefined> {
  render() {
      const {children} = this.props;

    return (
      <div>
          <Switch>
              <Route path="/" component={InstallBtn} exact />
              <Route path="/:appCode" component={BackLink} />
          </Switch>
        <hr/>
        {children}
      </div>
    );
  }
}
