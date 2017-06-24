import { handleActions } from 'redux-actions';

import * as actions from './actions';
import { normalizeGroupExercises } from './normalizers';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    groupExercises: {},
};

const actionsHandlers = {
    [actions.GET_GROUP_EXERCISES_REQUEST]: state => ({
        ...state,
        isFetching: true,
        didInvalidate: false,
    }),
    [actions.GET_GROUP_EXERCISES_SUCCESS]: (state, { payload }) => {
        // check if first create new collection
        if (payload.groupExercises.paging.currentPage === 0) {
            return ({
                ...state,
                isFetching: false,
                groupExercises: {
                    ...normalizeGroupExercises(payload.groupExercises.results),
                },
            });
        }
        return ({
            ...state,
            isFetching: false,
            groupExercises: {
                ...state.groupExercises,
                ...normalizeGroupExercises(payload.groupExercises.results),
            },
        });
    },
    [actions.GET_GROUP_EXERCISES_FAILURE]: state => ({
        ...state,
        isFetching: false,
        didInvalidate: true,
    }),
};

export default handleActions(actionsHandlers, initialState);
