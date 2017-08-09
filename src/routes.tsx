import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './Components/App';
import ListApp from './Components/ListApp';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={ListApp} />
    </Switch>
  </App>
);
