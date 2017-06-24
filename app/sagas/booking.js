import { takeLatest, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { show, hide } from 'redux-modal';

import * as actions from './../state/booking/actions';
import { booking as bookingSelector } from './../selectors/booking';
import { getMyBookings, bookGroupExercise, cancelGroupExercise } from './../services/api';

function* getMyBooking() {
    try {
        const response = yield call(getMyBookings);
        yield put(actions.getBookingsSuccess({ bookings: response }));
    } catch (error) {
        yield put(actions.getBookingsFailure(error));
    }
}

export function* watchGetMyBookingRequest() {
    yield takeLatest(actions.GET_BOOKINGS_REQUEST, getMyBooking);
}

export function* bookingFlow() {
    yield takeLatest(actions.BOOK_GROUP_EXERCISE_REQUEST, function* ({ payload: groupExerciseId }) {
        try {
            const training = yield call(bookGroupExercise, groupExerciseId);
            yield put(actions.bookGroupExerciseSuccess(training));

            yield put(show('confirm', { text: 'Class booked' }));
            yield call(delay, 1400);
            yield put(hide('confirm'));
        } catch (error) {
            yield put(actions.bookGroupExerciseFailure(error));
            yield put(show('error', { text: error.response.data.userMessage }));
        }
    });
}

export function* cancelBookingFlow() {
    yield takeLatest(actions.CANCEL_GROUP_EXERCISE_REQUEST, function* ({ payload: groupExerciseId }) {
        try {
            const booking = yield select(bookingSelector, [groupExerciseId]);
            yield call(cancelGroupExercise, booking.participationId);
            yield put(actions.cancelGroupExerciseSuccess(groupExerciseId));

            yield put(show('confirm', { text: 'Class cancelled' }));
            yield call(delay, 1400);
            yield put(hide('confirm'));
        } catch (error) {
            yield put(actions.cancelGroupExerciseFailure(error));
            yield put(show('error', { text: error.response.data.userMessage }));
        }
    });
}

