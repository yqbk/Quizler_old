
import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
    favorites: [],
};

const actionsHandlers = {
    [actions.INIT_GROUP_EXERCISE_TYPE_FAVORITES]: (state, { payload: favorites }) => ({
        ...state,
        favorites,
    }),
    [actions.ADD_GROUP_EXERCISE_TYPE_TO_FAVORITES]: (state, { payload: groupExerciseTypeId }) => ({
        ...state,
        favorites: [...state.favorites, groupExerciseTypeId],
    }),
    [actions.REMOVE_GROUP_EXERCISE_TYPE_FROM_FAVORITES]: (state, { payload: groupExerciseTypeId }) => ({
        ...state,
        favorites: state.favorites.filter(item => item !== groupExerciseTypeId),
    }),
};

export default handleActions(actionsHandlers, initialState);
