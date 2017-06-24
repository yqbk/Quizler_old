import { handleActions } from 'redux-actions';

import * as actions from './actions';
import { deleteProperty } from '../../services/utils';
import { normalizeBookings } from './normalizers';

const initialState = {
    addBookingRequest: {
        groupExerciseId: null,
        isFetching: false,
        didInvalidate: false,
        errorMessage: '',
    },
    removeBookingRequest: {
        groupExerciseId: null,
        isFetching: false,
        didInvalidate: false,
        errorMessage: '',
    },
    getBookingsRequest: {
        isFetching: false,
        didInvalidate: false,
    },
    bookings: {},
};

const actionsHandlers = {
    [actions.BOOK_GROUP_EXERCISE_REQUEST]: (state, { payload: groupExerciseId }) => ({
        ...state,
        addBookingRequest: {
            ...state.addBookingRequest,
            groupExerciseId,
            isFetching: true,
            didInvalidate: false,
            errorMessage: '',
        },
    }),
    [actions.BOOK_GROUP_EXERCISE_SUCCESS]: (state, { payload }) => ({
        ...state,
        addBookingRequest: {
            ...state.addBookingRequest,
            isFetching: false,
        },
        bookings: {
            ...state.bookings,
            [payload.bookingId]: payload,
        },
    }),
    [actions.BOOK_GROUP_EXERCISE_FAILURE]: (state, { payload }) => ({
        ...state,
        addBookingRequest: {
            ...state.addBookingRequest,
            isFetching: false,
            didInvalidate: true,
            errorMessage: payload.errorMessage,
        },
    }),

    [actions.CANCEL_GROUP_EXERCISE_REQUEST]: (state, { payload: groupExerciseId }) => ({
        ...state,
        removeBookingRequest: {
            ...state.removeBookingRequest,
            groupExerciseId,
            isFetching: true,
            didInvalidate: false,
            errorMessage: '',
        },
    }),
    [actions.CANCEL_GROUP_EXERCISE_SUCCESS]: (state, { payload: groupExerciseId }) => ({
        ...state,
        removeBookingRequest: {
            ...state.removeBookingRequest,
            isFetching: false,
        },
        bookings: deleteProperty(state.bookings, groupExerciseId),
    }),
    [actions.CANCEL_GROUP_EXERCISE_FAILURE]: (state, { payload }) => ({
        ...state,
        removeBookingRequest: {
            ...state.removeBookingRequest,
            isFetching: false,
            didInvalidate: true,
            errorMessage: payload.errorMessage,
        },
    }),
    [actions.GET_BOOKINGS_REQUEST]: state => ({
        ...state,
        getBookingsRequest: {
            isFetching: true,
            didInvalidate: false,
        },
    }),
    [actions.GET_BOOKINGS_SUCCESS]: (state, { payload }) => ({
        ...state,
        getBookingsRequest: {
            isFetching: false,
            didInvalidate: false,
        },
        bookings: {
            ...state.bookings,
            ...normalizeBookings(payload.bookings),
        },
    }),
    [actions.GET_BOOKINGS_FAILURE]: state => ({
        ...state,
        getBookingsRequest: {
            isFetching: false,
            didInvalidate: true,
        },
    }),
};

export default handleActions(actionsHandlers, initialState);
