import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    didSuccess: false,
};

const actionsHandlers = {
    [actions.RESET_PASSWORD_INIT]: () => (initialState),
    [actions.RESET_PASSWORD_REQUEST]: state => ({
        ...state,
        isFetching: true,

    }),
    [actions.RESET_PASSWORD_SUCCESS]: state => ({
        ...state,
        isFetching: false,
        didSuccess: true,

    }),
    [actions.RESET_PASSWORD_FAILURE]: state => ({
        ...state,
        isFetching: false,
        didInvalidate: true,
    }),
};

export default handleActions(actionsHandlers, initialState);
