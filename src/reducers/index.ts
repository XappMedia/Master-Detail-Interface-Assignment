import { combineReducers, Reducer } from 'redux';
import { appReducer, AppState } from './app';

export interface State {
  app: AppState;
}

export default combineReducers<State>({
  app: appReducer
});
