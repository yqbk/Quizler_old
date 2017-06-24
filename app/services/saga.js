import csm from 'redux-saga';

let sagaMiddleware;

export const createSagaMiddleware = (...props) => (
    sagaMiddleware = csm(...props)
);

export const runSaga = (saga) => {
    if (sagaMiddleware) {
        sagaMiddleware.run(saga);
    }
};
