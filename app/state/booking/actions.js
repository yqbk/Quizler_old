import { createAction } from 'redux-actions';

export const GET_BOOKINGS_REQUEST = 'BOOKING/GET_BOOKINGS_REQUEST';
export const GET_BOOKINGS_SUCCESS = 'BOOKING/GET_BOOKINGS_SUCCESS';
export const GET_BOOKINGS_FAILURE = 'BOOKING/GET_BOOKINGS_FAILURE';

export const BOOK_GROUP_EXERCISE_REQUEST = 'BOOKING/BOOK_REQUEST';
export const BOOK_GROUP_EXERCISE_SUCCESS = 'BOOKING/BOOK_SUCCESS';
export const BOOK_GROUP_EXERCISE_FAILURE = 'BOOKING/BOOK_FAILURE';

export const CANCEL_GROUP_EXERCISE_REQUEST = 'BOOKING/CANCEL_REQUEST';
export const CANCEL_GROUP_EXERCISE_SUCCESS = 'BOOKING/CANCEL_SUCCESS';
export const CANCEL_GROUP_EXERCISE_FAILURE = 'BOOKING/CANCEL_FAILURE';

export const getBookingsRequest = createAction(GET_BOOKINGS_REQUEST);
export const getBookingsSuccess = createAction(GET_BOOKINGS_SUCCESS);
export const getBookingsFailure = createAction(GET_BOOKINGS_FAILURE);

export const bookGroupExerciseRequest = createAction(BOOK_GROUP_EXERCISE_REQUEST);
export const bookGroupExerciseSuccess = createAction(BOOK_GROUP_EXERCISE_SUCCESS);
export const bookGroupExerciseFailure = createAction(BOOK_GROUP_EXERCISE_FAILURE);

export const cancelGroupExerciseRequest = createAction(CANCEL_GROUP_EXERCISE_REQUEST);
export const cancelGroupExerciseSuccess = createAction(CANCEL_GROUP_EXERCISE_SUCCESS);
export const cancelGroupExerciseFailure = createAction(CANCEL_GROUP_EXERCISE_FAILURE);
