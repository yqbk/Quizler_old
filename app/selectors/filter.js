import I18n from 'react-native-i18n';
import { createSelector } from 'reselect';

import { times } from './../config/times';
import { centersHashTable } from './center';
import { groupExerciseTypeHashTable } from './group-exercise-type';

const getFiltersSummary = (filters, centersHashTable, groupExerciseTypeHashTable) => {
    let groupExerciseTypesSummary = '';
    let timesSummary = '';
    let centersSummary = '';

    const numberOfAvailableGroupExerciseTypes = Object.keys(groupExerciseTypeHashTable).length;
    const numberOfGroupExerciseTypes = filters.groupExerciseTypes.length;

    const numberOfAvailableTimes = Object.keys(times).length;
    const numberOfTimes = filters.times.length;

    const numberOfAvailableCenters = Object.keys(centersHashTable).length;
    const numberOfCenters = filters.centers.length;

    if (numberOfAvailableGroupExerciseTypes === numberOfGroupExerciseTypes) {
        groupExerciseTypesSummary = I18n.t('filter.allClasses');
    } else if (numberOfGroupExerciseTypes > 1) {
        groupExerciseTypesSummary = I18n.t('filter.xClasses', { numberFiltersProposal: numberOfGroupExerciseTypes });
    } else if (numberOfGroupExerciseTypes === 1) {
        groupExerciseTypesSummary = groupExerciseTypeHashTable[filters.groupExerciseTypes[0]].activityName;
    }

    if (numberOfAvailableTimes === numberOfTimes) {
        timesSummary = I18n.t('filter.allDay');
    } else if (numberOfTimes > 1) {
        timesSummary = I18n.t('filter.xTimes', { numberFiltersProposal: numberOfTimes });
    } else if (numberOfTimes === 1) {
        timesSummary = I18n.t(times[filters.times[0]].name);
    }

    if (numberOfAvailableCenters === numberOfCenters) {
        centersSummary = I18n.t('filter.allGyms');
    } else if (numberOfCenters > 1) {
        centersSummary = I18n.t('filter.xGyms', { numberFiltersProposal: numberOfCenters });
    } else if (numberOfCenters === 1) {
        centersSummary = centersHashTable[filters.centers[0]].name;
    }

    return `${centersSummary} · ${timesSummary} · ${groupExerciseTypesSummary}`;
};


export const timeFiltersProposal = state => state.filter.proposal.times;
export const centerFiltersProposal = state => state.filter.proposal.centers;
export const groupExerciseTypesFiltersProposal = state => state.filter.proposal.groupExerciseTypes;
export const filtersProposal = state => state.filter.proposal;
export const filtersConfirmed = state => state.filter.confirmed;

export const areProposalsFilled = createSelector(
    timeFiltersProposal,
    centerFiltersProposal,
    groupExerciseTypesFiltersProposal,
    (timeFiltersProposal, centerFiltersProposal, groupExerciseTypesFiltersProposal) => {
        return (!!timeFiltersProposal.length &&
               !!centerFiltersProposal.length &&
               !!groupExerciseTypesFiltersProposal.length);
    });

export const centerFiltersSummary = createSelector(
    centerFiltersProposal,
    centersHashTable,
    (centerFiltersProposal, centersHashTable) => {
        const numberOfAvailableCenters = Object.keys(centersHashTable).length;
        const numberFiltersProposal = centerFiltersProposal.length;

        if (numberOfAvailableCenters === numberFiltersProposal) {
            return I18n.t('filter.allGyms');
        } else if (numberFiltersProposal > 3) {
            return I18n.t('filter.xGyms', { numberFiltersProposal });
        } else if (numberFiltersProposal !== 0) {
            return centerFiltersProposal.reduce((previous, current, index, array) => {
                let newValue = previous + centersHashTable[current].name;

                if (index !== array.length - 1) {
                    newValue += ', ';
                }

                return newValue;
            }, '');
        }
        return I18n.t('filter.selectGyms');
    });

export const timeFiltersSummary = createSelector(timeFiltersProposal, (timeFiltersProposal) => {
    const numberOfAvailableTimes = Object.keys(times).length;
    const numberFiltersProposal = timeFiltersProposal.length;

    if (numberOfAvailableTimes === numberFiltersProposal) {
        return I18n.t('filter.allDay');
    } else if (numberFiltersProposal !== 0) {
        return timeFiltersProposal.reduce((previous, current, index, array) => {
            let newValue = previous + I18n.t(times[current].name);

            if (index !== array.length - 1) {
                newValue += ', ';
            }

            return newValue;
        }, '');
    }
    return I18n.t('filter.selectTimeOfDay');
});


export const groupExerciseTypesFiltersSummary = createSelector(
    groupExerciseTypesFiltersProposal,
    groupExerciseTypeHashTable,
    (groupExerciseTypesFiltersProposal, groupExerciseTypeHashTable) => {
        const numberOfAvailableGroupExerciseTypes = Object.keys(groupExerciseTypeHashTable).length;
        const numberFiltersProposal = groupExerciseTypesFiltersProposal.length;

        if (numberOfAvailableGroupExerciseTypes === numberFiltersProposal) {
            return I18n.t('filter.allClasses');
        } else if (numberFiltersProposal > 3) {
            return I18n.t('filter.xClasses', { numberFiltersProposal });
        } else if (numberFiltersProposal !== 0) {
            return groupExerciseTypesFiltersProposal.reduce((previous, current, index, array) => {
                let newValue = previous + groupExerciseTypeHashTable[current].activityName;

                if (index !== array.length - 1) {
                    newValue += ', ';
                }

                return newValue;
            }, '');
        }
        return I18n.t('filter.selectClasses');
    });

export const filtersSummary = createSelector(
    filtersConfirmed,
    centersHashTable,
    groupExerciseTypeHashTable,
    getFiltersSummary);

export const confirmedTimes = state => state.filter.confirmed.times;
export const confirmedCenters = state => state.filter.confirmed.centers;
export const confirmedGroupExerciseTypes = state => state.filter.confirmed.groupExerciseTypes;

export const confirmedGroupExerciseTypesNames = createSelector(
    groupExerciseTypeHashTable,
    confirmedGroupExerciseTypes,
    (groupExerciseTypeHashTable, confirmedGroupExerciseTypes) => {
        return confirmedGroupExerciseTypes.map(id => groupExerciseTypeHashTable[id].activityName);
    });

export const confirmedCentersNames = createSelector(
    centersHashTable,
    confirmedCenters,
    (centersHashTable, confirmedCenters) => confirmedCenters.map(id => centersHashTable[id].name));

export const isHistoryFetching = state => state.filter.isHistoryFetching;
export const filtersHistory = state => state.filter.history;

export const filtersHistorySummary = createSelector(
    filtersHistory,
    centersHashTable,
    groupExerciseTypeHashTable,
    (filtersHistory, centersHashTable, groupExerciseTypeHashTable) => {
        return filtersHistory.map(historyItem => getFiltersSummary(historyItem, centersHashTable, groupExerciseTypeHashTable));
    });
