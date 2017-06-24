import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from './../state/activity-history/actions';
import { getMyActivityHistory } from './../services/api';

export function* getActivityHistoryFromServer() {
    try {
        const response = yield call(getMyActivityHistory);
        yield put(actions.getActivityHistorySuccess(response));
    } catch (error) {
        yield put(actions.getActivityHistoryFailure(error));
    }
}

export function* getActivityHistorySaga() {
    yield takeLatest(actions.GET_ACTIVITY_HISTORY_REQUEST, getActivityHistoryFromServer);
}
