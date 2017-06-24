import { show } from 'redux-modal';
import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from './../state/auth/actions';
import { login, getMyModel } from './../services/api';
import { getBookingsRequest } from './../state/booking/actions';
import { getActivityHistoryRequest } from './../state/activity-history/actions';

function* loginFlow({ payload }) {
    try {
        const loginResponse = yield call(login, payload.username, payload.password);

        // we need to set token before we could request for user data
        // yield put(actions.setToken(loginResponse.token));

        // const myModalResponseResponse = yield call(getMyModel);
        // yield put(actions.setUserModel(myModalResponseResponse));

        yield put(actions.loginSuccess());

        // yield put(getBookingsRequest());
        // yield put(getActivityHistoryRequest());
    } catch (error) {
        yield put(actions.loginFailure(error));
        yield put(show('error', { text: 'Your username or password is not correct. Please check it and try again.' }));
    }
}

export function* watchLoginRequest() {
    yield takeLatest(actions.LOGIN_REQUEST, loginFlow);
}

