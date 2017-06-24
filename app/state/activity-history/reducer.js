import { handleActions } from 'redux-actions';

import * as actions from './actions';
import { normalizeActivities } from './normalizers';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    activities: {},
};

const actionsHandlers = {
    [actions.GET_ACTIVITY_HISTORY_REQUEST]: state => ({
        ...state,
        isFetching: true,
        didInvalidate: false,
    }),
    [actions.GET_ACTIVITY_HISTORY_SUCCESS]: (state, { payload }) => ({
        ...state,
        isFetching: false,
        activities: {
            ...state.activities,
            ...normalizeActivities(payload.results),
        },
    }),
    [actions.GET_ACTIVITY_HISTORY_FAILURE]: state => ({
        ...state,
        isFetching: false,
        didInvalidate: true,

    }),
};

export default handleActions(actionsHandlers, initialState);
