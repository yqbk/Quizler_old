import { createSelector } from 'reselect';
import { mapObject } from './../services/utils';
import { bookings, addBookingRequest, removeBookingRequest } from './booking';

export const isFetching = state => state.search.isFetching;
export const didInvalidate = state => state.search.didInvalidate;
export const groupExercisesHashTable = state => state.search.groupExercises;

export const groupExercisesByDate = createSelector(
    groupExercisesHashTable,
    bookings,
    addBookingRequest,
    removeBookingRequest,
    (groupExercisesHashTable, bookings, addBookingRequest, removeBookingRequest) => {
        return mapObject(groupExercisesHashTable, (key, value) => value).reduce((previous, current) => {
            const dateIndex = previous.findIndex(item => item.date === current.date);
            let item;

            if (bookings[current.id]) {
                item = {
                    ...current,
                    key: current.id,
                    state: bookings[current.id].state,
                    isStateChanging: (removeBookingRequest.isFetching && removeBookingRequest.groupExerciseId === current.id),
                    isOtherStateChanging: (removeBookingRequest.isFetching && removeBookingRequest.groupExerciseId !== current.id),
                    participationId: bookings[current.id].participationId,
                };
            } else {
                item = {
                    ...current,
                    key: current.id,
                    state: null,
                    isStateChanging: (addBookingRequest.isFetching && addBookingRequest.groupExerciseId === current.id),
                    isOtherStateChanging: (addBookingRequest.isFetching && addBookingRequest.groupExerciseId !== current.id),
                    participationId: null,
                };
            }

            if (dateIndex !== -1) {
                previous[dateIndex].data.push(item);
            } else {
                previous.push({
                    key: current.date,
                    date: current.date,
                    data: [item],
                });
            }

            return previous;
        }, []);
    });
