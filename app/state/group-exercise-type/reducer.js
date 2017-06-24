import { handleActions } from 'redux-actions';

import * as actions from './actions';
import { normalizeGroupExerciseTypes } from './normalizers';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    groupExerciseTypes: {},
};

const actionsHandlers = {
    [actions.INIT_GROUP_EXERCISE_TYPES]: (state, { payload: groupExerciseTypes }) => ({
        ...state,
        groupExerciseTypes,

    }),
    [actions.GET_GROUP_EXERCISE_TYPES_REQUEST]: state => ({
        ...state,
        isFetching: true,
        didInvalidate: false,
    }),
    [actions.GET_GROUP_EXERCISE_TYPES_SUCCESS]: (state, { payload }) => ({
        ...state,
        isFetching: false,
        groupExerciseTypes: {
            ...state.groupExerciseTypes,
            ...normalizeGroupExerciseTypes(payload.groupExerciseTypes),
        },
    }),
    [actions.GET_GROUP_EXERCISE_TYPES_FAILURE]: state => ({
        ...state,
        isFetching: false,
        didInvalidate: true,

    }),
};

export default handleActions(actionsHandlers, initialState);
