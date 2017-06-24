import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
    request: {
        isFetching: false,
        didInvalidate: false,
    },
    didSkipLogin: false,
    token: null,
    userModel: null,
};

const actionsHandlers = {
    [actions.LOGIN_REQUEST]: (state, action) => ({
        ...state,
        request: {
            isFetching: true,
            didInvalidate: false,
        },
    }),
    [actions.LOGIN_SUCCESS]: (state, action) => ({
        ...state,
        request: {
            isFetching: false,
            didInvalidate: false,
        },
    }),
    [actions.LOGIN_FAILURE]: (state, action) => ({
        ...state,
        request: {
            isFetching: false,
            didInvalidate: true,
        },
    }),
    [actions.LOGOUT]: state => ({
        ...state,
        token: null,
        userModel: null,
    }),

    [actions.SET_TOKEN]: (state, { payload: token }) => ({
        ...state,
        token,
    }),
    [actions.SET_USER_MODEL]: (state, { payload: userModel }) => ({
        ...state,
        userModel,
    }),
    [actions.SKIP_LOGIN]: state => ({
        ...state,
        didSkipLogin: true,
    }),
};

export default handleActions(actionsHandlers, initialState);
