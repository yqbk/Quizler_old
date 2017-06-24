import { handleActions } from 'redux-actions';

import * as actions from './actions';
import { normalizeCenters } from './normalizers';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    centers: {},
};

const actionsHandlers = {
    [actions.INIT_CENTERS]: (state, { payload: centers }) => ({
        ...state,
        centers,

    }),
    [actions.GET_CENTERS_REQUEST]: state => ({
        ...state,
        isFetching: true,
        didInvalidate: false,
    }),
    [actions.GET_CENTERS_SUCCESS]: (state, { payload }) => ({
        ...state,
        isFetching: false,
        centers: {
            ...state.centers,
            ...normalizeCenters(payload.centers),
        },
    }),
    [actions.GET_CENTERS_FAILURE]: state => ({
        ...state,
        isFetching: false,
        didInvalidate: true,

    }),
};

export default handleActions(actionsHandlers, initialState);
