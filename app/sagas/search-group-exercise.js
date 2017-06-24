import { takeLatest, call, put, select, take } from 'redux-saga/effects';
import * as filterActions from './../state/filter/actions';
import * as actions from './../state/search/actions';
import * as selectors from './../selectors/filter';
import { getGroupExercises } from './../services/api';
import { times } from './../config/times';
import { groupExerciseTypeHashTable } from './../selectors/group-exercise-type';

export function* getGroupExercisesFlow() {
    try {
        yield put(filterActions.confirmFilters()); // confirm filters

        const confirmedTimes = yield select(selectors.confirmedTimes);
        const confirmedCentersNames = yield select(selectors.confirmedCentersNames);
        const confirmedGroupExerciseTypesNames = yield select(selectors.confirmedGroupExerciseTypesNames);

        const response = yield call(getGroupExercises, {
            centers: confirmedCentersNames,
            activities: confirmedGroupExerciseTypesNames,
            timeOfDay: confirmedTimes,
        });

        yield put(actions.getGroupExercisesSuccess({ groupExercises: response }));
    } catch (error) {
        yield put(actions.getGroupExercisesFailure(error));
    }
}

export function* initSearchViewSaga() {
    const { payload: historyCollection } = yield take(filterActions.INIT_HISTORY); // init history is triggered after call for centers and group exercise types

    if (historyCollection.length > 0) {  // if there is an history we should get search results for last searched filters
        yield put(filterActions.setProposalFromHistory(0));
        yield put(actions.getGroupExercisesRequest());
    } else {  // if there is no history we select all day and all activity types but no centers
        yield put(filterActions.shiftTimes(Object.keys(times)));
        const hashTable = yield select(groupExerciseTypeHashTable);
        yield put(filterActions.shiftGroupExerciseTypes(Object.keys(hashTable)));
    }
}

export function* watchGetGroupExercisesRequest() {
    yield takeLatest(actions.GET_GROUP_EXERCISES_REQUEST, getGroupExercisesFlow);
}
