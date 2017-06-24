
import * as actions from './actions';
import { handleActions } from 'redux-actions';

const initialState = {
    isHistoryFetching: true,
    history: [],
    proposal: {
        groupExerciseTypes: [],
        centers: [],
        times: [],
    },
    confirmed: {
        groupExerciseTypes: [],
        centers: [],
        times: [],
    },
};

const actionsHandlers = {
    [actions.SELECT_GROUP_EXERCISE_TYPE]: (state, { payload: groupExerciseTypeId }) => ({
        ...state,
        proposal: {
            ...state.proposal,
            groupExerciseTypes: [...state.proposal.groupExerciseTypes, groupExerciseTypeId],
        },
    }),
    [actions.SELECT_CENTER]: (state, { payload: centerId }) => ({
        ...state,
        proposal: {
            ...state.proposal,
            centers: [...state.proposal.centers, centerId],
        },
    }),
    [actions.SELECT_TIME]: (state, { payload: time }) => ({
        ...state,
        proposal: {
            ...state.proposal,
            times: [...state.proposal.times, time],
        },
    }),
    [actions.DESELECT_GROUP_EXERCISE_TYPE]: (state, { payload: groupExerciseId }) => ({
        ...state,
        proposal: {
            ...state.proposal,
            groupExerciseTypes: state.proposal.groupExerciseTypes.filter(id => (id !== groupExerciseId)),
        },
    }),
    [actions.DESELECT_CENTER]: (state, { payload: centerId }) => ({
        ...state,
        proposal: {
            ...state.proposal,
            centers: state.proposal.centers.filter(id => (id !== centerId)),
        },
    }),
    [actions.DESELECT_TIME]: (state, { payload: time }) => ({
        ...state,
        proposal: {
            ...state.proposal,
            times: state.proposal.times.filter(id => (id !== time)),
        },
    }),
    [actions.CLEAR_PROPOSAL_FILTERS]: state => ({
        ...state,
        proposal: {
            groupExerciseTypes: [],
            centers: [],
            times: [],
        },
    }),
    [actions.CONFIRM_FILTERS]: state => ({
        ...state,
        confirmed: {
            ...state.proposal,
        },
    }),
    [actions.SHIFT_GROUP_EXERCISE_TYPES]: (state, { payload: groupExerciseTypes }) => ({
        ...state,
        proposal: {
            ...state.proposal,
            groupExerciseTypes,
        },
    }),
    [actions.SHIFT_CENTERS]: (state, { payload: centers }) => ({
        ...state,
        proposal: {
            ...state.proposal,
            centers,
        },
    }),
    [actions.SHIFT_TIMES]: (state, { payload: times }) => ({
        ...state,
        proposal: {
            ...state.proposal,
            times,
        },
    }),
    [actions.ADD_CONFIRMED_TO_HISTORY]: state => ({
        ...state,
        history: (() => {
            const historyLength = state.history.length;
            if (historyLength === 3) {
                return [{ ...state.confirmed }, ...state.history.slice(0, historyLength - 1)];
            }
            return [{ ...state.confirmed }, ...state.history];
        })(),
    }),
    [actions.INIT_HISTORY]: (state, { payload: history }) => ({
        ...state,
        isHistoryFetching: false,
        history,
    }),
    [actions.SET_PROPOSAL_FROM_HISTORY]: (state, { payload: historyIndex }) => ({
        ...state,
        proposal: { ...state.history[historyIndex] },
    }),
};

export default handleActions(actionsHandlers, initialState);
