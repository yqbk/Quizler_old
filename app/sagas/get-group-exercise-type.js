import { AsyncStorage } from 'react-native';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import * as actions from './../state/group-exercise-type/actions';
import { groupExerciseTypeHashTable } from './../selectors/group-exercise-type';
import { getGroupExerciseTypes } from './../services/api';

const GROUP_EXERCISE_TYPE_KEY = 'GROUP_EXERCISE_TYPE';

function* getGroupExerciseTypesFromCache() {
    const groupExerciseTypesCache = yield call([AsyncStorage, AsyncStorage.getItem], GROUP_EXERCISE_TYPE_KEY);
    yield put(actions.initGroupExerciseTypes(JSON.parse(groupExerciseTypesCache) || {}));
}

function* getGroupExerciseTypesFromServer() {
    try {
        const response = yield call(getGroupExerciseTypes);
        yield put(actions.getGroupExerciseTypesSuccess({ groupExerciseTypes: response }));

        const groupExerciseTypeHashTableData = yield select(groupExerciseTypeHashTable);
        yield call([AsyncStorage, AsyncStorage.setItem], GROUP_EXERCISE_TYPE_KEY, JSON.stringify(groupExerciseTypeHashTableData));
    } catch (error) {
        yield put(actions.getGroupExerciseTypesFailure(error));
    }
}

export function* getGroupExerciseTypesSaga() {
    yield takeLatest(actions.GET_GROUP_EXERCISE_TYPES_REQUEST, getGroupExerciseTypesFromServer);

    yield call(getGroupExerciseTypesFromCache);
    yield put(actions.getGroupExerciseTypesRequest());
}
