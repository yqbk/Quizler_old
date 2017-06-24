export const normalizeActivities = activityCollection => activityCollection.reduce((previous, current) => {
    previous[current.id] = current;
    return previous;
}, {});
