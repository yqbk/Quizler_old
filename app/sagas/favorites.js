import { AsyncStorage } from 'react-native';
import { takeEvery, call, put, select, fork, take } from 'redux-saga/effects';
import * as actions from './../state/favorite/actions';
import * as selectors from './../selectors/favorites';

const FAVORITES_KEY = 'FAVORITES';

function* initFavorites() {
    const favorites = yield call([AsyncStorage, AsyncStorage.getItem], FAVORITES_KEY);
    yield put(actions.initGroupExerciseTypeFavorites(JSON.parse(favorites) || []));
}

function* saveFavoritesInLS() {
    const favorites = yield select(selectors.favorites);
    yield call([AsyncStorage, AsyncStorage.setItem], FAVORITES_KEY, JSON.stringify(favorites));
}

export function* favorites() {
    yield fork(initFavorites);
    yield takeEvery([actions.ADD_GROUP_EXERCISE_TYPE_TO_FAVORITES, actions.REMOVE_GROUP_EXERCISE_TYPE_FROM_FAVORITES], saveFavoritesInLS);
}
