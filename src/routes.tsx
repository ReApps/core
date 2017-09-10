import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './Components/App';
import AppList from './Components/AppList';
import AppView from './Components/AppView';

export default () => (
  <App>
    <Switch>
        <Route path="/" component={AppList} exact />
        <Route path="/:appHash" component={AppView} />
    </Switch>
  </App>
);
