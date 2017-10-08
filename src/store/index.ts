import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { State } from '../reducers';

export function configureStore(initialState?: State): Store<State> {

  const create = window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore;

  const createStoreWithMiddleware = applyMiddleware(thunk)(create);

  const store = createStoreWithMiddleware(rootReducer, initialState) as Store<State>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
