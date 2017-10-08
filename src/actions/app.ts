import { Action, Dispatch } from 'redux';
import { App } from '../models/App';
import { State } from '../reducers';

export type AppActions = GetAppsRequestAction | GetAppsSuccessAction;

export type GetAppsRequest = 'GET_APPS_REQUEST';
export const GET_APPS_REQUEST: GetAppsRequest = 'GET_APPS_REQUEST';

export interface GetAppsRequestAction extends Action {
    type: GetAppsRequest;
}

export function getAppsRequest(): GetAppsRequestAction {
    return {
        type: GET_APPS_REQUEST
    };
}

export type GetAppsSuccess = 'GET_APPS_SUCCESS';
export const GET_APPS_SUCCESS: GetAppsSuccess = 'GET_APPS_SUCCESS';

export interface GetAppsSuccessAction extends Action {
    type: GetAppsSuccess;
    payload: {
        apps: App[]
    };
}

export function getAppsSuccess(apps: App[]): GetAppsSuccessAction {
    return {
        payload: {
            apps
        },
        type: GET_APPS_SUCCESS
    };
}

export type GetAppsFailure = 'GET_APPS_FAILURE';
export const GET_APPS_FAILURE: GetAppsFailure = 'GET_APPS_FAILURE';

export function getApps(): (dispatch: Dispatch<State>) => Promise<GetAppsSuccessAction> {
    return (dispatch: Dispatch<State>): Promise<GetAppsSuccessAction> => {
        dispatch(getAppsRequest());
        return fetch('https://api.xapp.media/apps?organizationId=FederatedMedia&limit=500', {
            method: 'GET'
        }).then((body) => {
            return body.json();
        }).then((json) => {
            return dispatch(getAppsSuccess(json.apps));
        });
    };
}
