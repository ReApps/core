import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configureStore, history } from './store/configureStore';
import Root from './Components/Root';

const store = configureStore();

let render = () => {
    ReactDOM.render(
        <Root store={store} history={history} />,
        document.getElementById('App')
    );
};

render();
