import { combineReducers, compose, applyMiddleware, createStore } from 'redux';

let store;
const asyncReducers = {};


const makeRootReducer = reducers => combineReducers({ ...reducers });

export const createCommonStore = (reducers, initialState = {}, middleware = [], enhancers = [], creator) => {
    const create = creator || createStore;

    store = create(
        makeRootReducer(reducers),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancers,
        ),
    );
    return store;
};


export const injectReducerAsync = (key, reducer) => {
    if (!store) {
        throw new Error('Service should create store before you could call "injectReducer" method. Use "createCommonStore" method to create a store.');
    }

    asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(asyncReducers));

    return () => {
        delete asyncReducers[key];
        store.replaceReducer(makeRootReducer(asyncReducers));
    };
};

// inspiration: https://github.com/jokeyrhyme/wow-healer-bootcamp/blob/master/utils/combineReducers.js

export const createReducer = (keyedReducers = {}, ...reducers) => (state = {}, action) => {
    // run reducers that are specific to top-level keys
    const result = Object.keys(keyedReducers).reduce((previousState, key) => {
        const reducer = keyedReducers[key];

        return {
            ...previousState,
            [key]: reducer(previousState[key], action),
        };
    }, state);

    // run reducers that access the complete state
    return reducers.reduce((previousState, reducer) => reducer(previousState, action), result);
};

export const getStore = () => {
    if (!store) {
        throw new Error('Service should create store before you could call "getStore" method. Use "createCommonStore" method to create a store.');
    }

    return store;
};
