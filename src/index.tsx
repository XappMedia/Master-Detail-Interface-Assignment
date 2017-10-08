import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import { App } from './containers/App';
import { configureStore } from './store';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/' component={App} />
        {/* Add a route here to show just the app detail */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
