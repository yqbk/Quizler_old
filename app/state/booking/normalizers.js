export const normalizeBookings = bookingCollection => bookingCollection.reduce((previous, current) => {
    previous[current.bookingId] = current;
    return previous;
}, {});
