import { AppActions, GET_APPS_REQUEST, GET_APPS_SUCCESS } from '../actions/app';
import { App } from '../models/App';

export interface AppState {
    apps: App[];
    currentApp?: App;
    loadingApps?: boolean;
}

const initialState: AppState = {
    apps: [],
    loadingApps: false
};

export function appReducer(state = { ...initialState }, action: AppActions): AppState {
    switch (action.type) {
        case GET_APPS_REQUEST:
            return { ...state, loadingApps: true };
        case GET_APPS_SUCCESS:
            const { apps } = action.payload;
            return { ...state, apps, loadingApps: false };
        default:
            return state;
    }
}