import { createAction } from 'redux-actions';

export const INIT_GROUP_EXERCISE_TYPES = 'GROUP_EXERCISE_TYPES/INIT';
export const GET_GROUP_EXERCISE_TYPES_REQUEST = 'GROUP_EXERCISE_TYPES/GET_REQUEST';
export const GET_GROUP_EXERCISE_TYPES_SUCCESS = 'GROUP_EXERCISE_TYPES/GET_SUCCESS';
export const GET_GROUP_EXERCISE_TYPES_FAILURE = 'GROUP_EXERCISE_TYPES/GET_FAILURE';

export const initGroupExerciseTypes = createAction(INIT_GROUP_EXERCISE_TYPES);
export const getGroupExerciseTypesRequest = createAction(GET_GROUP_EXERCISE_TYPES_REQUEST);
export const getGroupExerciseTypesSuccess = createAction(GET_GROUP_EXERCISE_TYPES_SUCCESS);
export const getGroupExerciseTypesFailure = createAction(GET_GROUP_EXERCISE_TYPES_FAILURE);
