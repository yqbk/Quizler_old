import { createAction } from 'redux-actions';

export const RESET_PASSWORD_INIT = 'RESET_PASSWORD/INIT';
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD/REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD/SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD/FAILURE';

export const resetPasswordInit = createAction(RESET_PASSWORD_INIT);
export const resetPasswordRequest = createAction(RESET_PASSWORD_REQUEST);
export const resetPasswordSuccess = createAction(RESET_PASSWORD_SUCCESS);
export const resetPasswordFailure = createAction(RESET_PASSWORD_FAILURE);
