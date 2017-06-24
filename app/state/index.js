import { reducer as modal } from 'redux-modal';

import authReducer from './auth/reducer';
import bookingReducer from './booking/reducer';
import groupExerciseTypeReducer from './group-exercise-type/reducer';
import resetPasswordReducer from './reset-password/reducer';
import centerReducer from './center/reducer';
import filterReducer from './filter/reducer';
import searchReducer from './search/reducer';
import favoriteReducer from './favorite/reducer';
import activityHistoryReducer from './activity-history/reducer';

export const getRootReducers = () => ({
    auth: authReducer,
    booking: bookingReducer,
    favorite: favoriteReducer,
    groupExerciseType: groupExerciseTypeReducer,
    center: centerReducer,
    resetPassword: resetPasswordReducer,
    filter: filterReducer,
    search: searchReducer,
    activityHistory: activityHistoryReducer,
    modal,
});
