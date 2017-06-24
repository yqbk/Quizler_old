import { createSelector } from 'reselect';
import { mapObject } from './../services/utils';

export const getBookingRequest = state => state.booking.getBookingsRequest;
export const addBookingRequest = state => state.booking.addBookingRequest;
export const removeBookingRequest = state => state.booking.removeBookingRequest;
export const booking = (state, id) => state.booking.bookings[id];
export const bookings = state => state.booking.bookings;

export const bookingsByDate = createSelector(bookings, (bookings) => {
    return mapObject(bookings, (key, value) => value).reduce((previous, current) => {
        const dateIndex = previous.findIndex(item => item.date === current.date);

        if (dateIndex !== -1) {
            previous[dateIndex].bookings.push(current);
        } else {
            previous.push({
                date: current.date,
                bookings: [current],
            });
        }

        return previous;
    }, []);
});
