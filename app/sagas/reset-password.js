
import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from './../state/reset-password/actions';
import { resetPassword } from './../services/api';

function* resetPasswordFlow({ payload }) {
    try {
        yield call(resetPassword, payload.username);
        yield put(actions.resetPasswordSuccess());
    } catch (error) {
        yield put(actions.resetPasswordFailure());
    }
}

export function* watchResetPasswordRequest() {
    yield takeLatest(actions.RESET_PASSWORD_REQUEST, resetPasswordFlow);
}
