import { createSelector } from 'reselect';
import { mapObject } from './../services/utils';
import { getWeekNumber } from './../utils/time';

export const isFetching = state => state.activityHistory.isFetching;
export const didInvalidate = state => state.activityHistory.didInvalidate;
export const activitiesHashTable = state => state.activityHistory.activities;
export const groupActivitiesByWeek = createSelector(activitiesHashTable, (activitiesHashTable) => {
    return mapObject(activitiesHashTable, (key, value) => value).reduce((previous, current) => {
        const currentWeekNumber = getWeekNumber(current.date);
        const weekIndex = previous.findIndex(item => item.weekNumber === currentWeekNumber);

        if (weekIndex !== -1) {
            previous[weekIndex].activities.push(current);
        } else {
            previous.push({
                weekNumber: currentWeekNumber,
                activities: [current],
            });
        }
        return previous;
    }, []).sort((a, b) => {
        if (a.weekNumber > b.weekNumber) {
            return -1;
        } else if (a.weekNumber < b.weekNumber) {
            return 1;
        }

        return 0;
    });
});
