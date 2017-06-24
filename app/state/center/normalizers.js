export const normalizeCenters = centersCollection => centersCollection.reduce((previous, current) => {
    previous[current.id] = current;
    return previous;
}, {});
