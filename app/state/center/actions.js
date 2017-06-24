import { createAction } from 'redux-actions';

export const INIT_CENTERS = 'CENTERS/INIT';
export const GET_CENTERS_REQUEST = 'CENTERS/GET_REQUEST';
export const GET_CENTERS_SUCCESS = 'CENTERS/GET_SUCCESS';
export const GET_CENTERS_FAILURE = 'CENTERS/GET_FAILURE';

export const initCenters = createAction(INIT_CENTERS);
export const getCentersRequest = createAction(GET_CENTERS_REQUEST);
export const getCentersSuccess = createAction(GET_CENTERS_SUCCESS);
export const getCentersFailure = createAction(GET_CENTERS_FAILURE);
