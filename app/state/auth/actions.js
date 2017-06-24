import { createAction } from 'redux-actions';

export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'AUTH/LOGIN_FAILURE';

export const SET_TOKEN = 'AUTH/TOKEN';
export const SET_USER_MODEL = 'AUTH/SET_USER_MODEL';
export const SKIP_LOGIN = 'AUTH/SKIP_LOGIN';
export const LOGOUT = 'AUTH/LOGOUT';

export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);
export const setToken = createAction(SET_TOKEN);
export const setUserModel = createAction(SET_USER_MODEL);
export const skipLogin = createAction(SKIP_LOGIN);
export const logout = createAction(LOGOUT);
