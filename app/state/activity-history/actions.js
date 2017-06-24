import { createAction } from 'redux-actions';

export const GET_ACTIVITY_HISTORY_REQUEST = 'ACTIVITY_HISTORY/GET_REQUEST';
export const GET_ACTIVITY_HISTORY_SUCCESS = 'ACTIVITY_HISTORY/GET_SUCCESS';
export const GET_ACTIVITY_HISTORY_FAILURE = 'ACTIVITY_HISTORY/GET_FAILURE';

export const getActivityHistoryRequest = createAction(GET_ACTIVITY_HISTORY_REQUEST);
export const getActivityHistorySuccess = createAction(GET_ACTIVITY_HISTORY_SUCCESS);
export const getActivityHistoryFailure = createAction(GET_ACTIVITY_HISTORY_FAILURE);
