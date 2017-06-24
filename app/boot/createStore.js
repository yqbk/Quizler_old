import { createCommonStore } from '../services/store';
import { createSagaMiddleware } from '../services/saga';
import { getRootReducers } from '../state';

export default (initialState = {}) => {
    const middleware = [];
    const enhancers = [];
    let sagaMiddlewareOptions;
    let creator;

    if (__DEV__) {
        if (GLOBAL.__REACTOTRON__) {
            creator = GLOBAL.__REACTOTRON__.createStore;
            sagaMiddlewareOptions = { sagaMonitor: GLOBAL.__REACTOTRON__.createSagaMonitor() };
        }

        if (GLOBAL.__REDUX_DEVTOOLS_EXTENSION__) {
            enhancers.push(GLOBAL.__REDUX_DEVTOOLS_EXTENSION__());
        }
    }

    middleware.push(createSagaMiddleware(sagaMiddlewareOptions));


    return createCommonStore(getRootReducers(), initialState, middleware, enhancers, creator);
};
