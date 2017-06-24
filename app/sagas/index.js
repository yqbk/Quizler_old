import { runSaga } from './../services/saga';
import { watchLoginRequest } from './auth';
import { watchGetMyBookingRequest, bookingFlow, cancelBookingFlow } from './booking';

import { getGroupExerciseTypesSaga } from './get-group-exercise-type';
import { getCentersSaga } from './get-centers';

import { watchResetPasswordRequest } from './reset-password';

import { watchGetGroupExercisesRequest, initSearchViewSaga } from './search-group-exercise';
import { filtersHistory } from './filters-history';
import { getActivityHistorySaga } from './activity-history';
import { favorites } from './favorites';

export const runSagas = () => {
    // // runSaga(getGroupExerciseTypesSaga);
    // // runSaga(getCentersSaga);
    //
    // runSaga(initSearchViewSaga);
    // runSaga(getActivityHistorySaga);
    runSaga(watchLoginRequest);
    // runSaga(watchGetMyBookingRequest);
    // runSaga(watchResetPasswordRequest);
    // runSaga(bookingFlow);
    // runSaga(cancelBookingFlow);
    // runSaga(watchGetGroupExercisesRequest);
    // runSaga(filtersHistory);
    // runSaga(favorites);
};
