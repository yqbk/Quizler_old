import { createAction } from 'redux-actions';

export const GET_GROUP_EXERCISES_REQUEST = 'SEARCH/GET_GROUP_EXERCISES_REQUEST';
export const GET_GROUP_EXERCISES_SUCCESS = 'SEARCH/GET_GROUP_EXERCISES_SUCCESS';
export const GET_GROUP_EXERCISES_FAILURE = 'SEARCH/GET_GROUP_EXERCISES_FAILURE';

export const getGroupExercisesRequest = createAction(GET_GROUP_EXERCISES_REQUEST);
export const getGroupExercisesSuccess = createAction(GET_GROUP_EXERCISES_SUCCESS);
export const getGroupExercisesFailure = createAction(GET_GROUP_EXERCISES_FAILURE);
