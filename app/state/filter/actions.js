import { createAction } from 'redux-actions';

export const SELECT_GROUP_EXERCISE_TYPE = 'FILTERS/SELECT_GROUP_EXERCISE_TYPE';
export const SELECT_CENTER = 'FILTERS/SELECT_CENTER';
export const SELECT_TIME = 'FILTERS/SELECT_TIME';

export const DESELECT_GROUP_EXERCISE_TYPE = 'FILTERS/DESELECT_GROUP_EXERCISE_TYPE';
export const DESELECT_CENTER = 'FILTERS/DESELECT_CENTER';
export const DESELECT_TIME = 'FILTERS/DESELECT_TIME';

export const SHIFT_GROUP_EXERCISE_TYPES = 'FILTERS/SHIFT_GROUP_EXERCISE_TYPES';
export const SHIFT_CENTERS = 'FILTERS/SHIFT_CENTERS';
export const SHIFT_TIMES = 'FILTERS/SHIFT_TIMES';

export const CLEAR_PROPOSAL_FILTERS = 'FILTERS/CLEAR_PROPOSAL_FILTERS';
export const CONFIRM_FILTERS = 'FILTERS/CONFIRM';
export const INIT_HISTORY = 'FILTERS/INIT_HISTORY';
export const ADD_CONFIRMED_TO_HISTORY = 'FILTERS/ADD_CONFIRMED_TO_HISTORY';

export const SET_PROPOSAL_FROM_HISTORY = 'FILTERS/SET_PROPOSAL_FROM_HISTORY';

export const selectGroupExerciseType = createAction(SELECT_GROUP_EXERCISE_TYPE);
export const selectCenter = createAction(SELECT_CENTER);
export const selectTime = createAction(SELECT_TIME);

export const deselectGroupExerciseType = createAction(DESELECT_GROUP_EXERCISE_TYPE);
export const deselectCenter = createAction(DESELECT_CENTER);
export const deselectTime = createAction(DESELECT_TIME);


export const shiftGroupExerciseTypes = createAction(SHIFT_GROUP_EXERCISE_TYPES);
export const shiftCenters = createAction(SHIFT_CENTERS);
export const shiftTimes = createAction(SHIFT_TIMES);

export const clearProposalFilters = createAction(CLEAR_PROPOSAL_FILTERS);
export const confirmFilters = createAction(CONFIRM_FILTERS);
export const addConfirmedToHistory = createAction(ADD_CONFIRMED_TO_HISTORY);
export const initHistory = createAction(INIT_HISTORY);
export const setProposalFromHistory = createAction(SET_PROPOSAL_FROM_HISTORY);
