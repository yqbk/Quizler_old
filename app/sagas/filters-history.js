import { AsyncStorage } from 'react-native';
import { takeEvery, call, put, select, fork, take } from 'redux-saga/effects';
import * as actions from './../state/filter/actions';
import * as selectors from './../selectors/filter';
import { GET_CENTERS_SUCCESS } from './../state/center/actions';
import { GET_GROUP_EXERCISE_TYPES_SUCCESS } from './../state/group-exercise-type/actions';

const HISTORY_FILTERS_KEY = 'HISTORY_FILTERS';

function* initHistory() {
    // wait for centers collection and groupTypes collection -> without this data history filters can't be matched with names
    yield [take(GET_CENTERS_SUCCESS), take(GET_GROUP_EXERCISE_TYPES_SUCCESS)];
    const historyFilters = yield call([AsyncStorage, AsyncStorage.getItem], HISTORY_FILTERS_KEY);
    yield put(actions.initHistory(JSON.parse(historyFilters) || []));
}

function* addToHistoryFlow() {
    const filtersHistory = yield select(selectors.filtersHistory);
    const filtersConfirmed = yield select(selectors.filtersConfirmed);

    const hasCopyInHistory = filtersHistory.some(historyItem => Object.keys(historyItem).every((filterProperty) => {
        const historyItemHash = JSON.stringify(historyItem[filterProperty].sort());
        const ConfirmedItemHash = JSON.stringify(filtersConfirmed[filterProperty].sort());

        return historyItemHash === ConfirmedItemHash;
    }));

    if (!hasCopyInHistory) {
        yield put(actions.addConfirmedToHistory());

        const newFiltersHistory = yield select(selectors.filtersHistory);
        yield call([AsyncStorage, AsyncStorage.setItem], HISTORY_FILTERS_KEY, JSON.stringify(newFiltersHistory));
    }
}

export function* filtersHistory() {
    yield fork(initHistory);
    yield takeEvery(actions.CONFIRM_FILTERS, addToHistoryFlow);
}
