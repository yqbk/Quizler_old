import { AsyncStorage } from 'react-native';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import * as actions from './../state/center/actions';
import { centersHashTable } from './../selectors/center';
import { getCenters } from './../services/api';


const CENTERS_KEY = 'CENTERS';

function* getCentersFromCache() {
    const centersCache = yield call([AsyncStorage, AsyncStorage.getItem], CENTERS_KEY);
    yield put(actions.initCenters(JSON.parse(centersCache) || {}));
}

export function* getCentersFromServer() {
    try {
        const response = yield call(getCenters);
        yield put(actions.getCentersSuccess({ centers: response }));

        const centersHashTableData = yield select(centersHashTable);
        yield call([AsyncStorage, AsyncStorage.setItem], CENTERS_KEY, JSON.stringify(centersHashTableData));
    } catch (error) {
        yield put(actions.getCentersFailure(error));
    }
}

export function* getCentersSaga() {
    yield takeLatest(actions.GET_CENTERS_REQUEST, getCentersFromServer);

    yield call(getCentersFromCache);
    yield put(actions.getCentersRequest());
}
