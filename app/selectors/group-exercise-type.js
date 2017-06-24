import { createSelector } from 'reselect';

export const isFetching = state => state.groupExerciseType.isFetching;
export const didInvalidate = state => state.groupExerciseType.didInvalidate;
export const groupExerciseType = (state, groupExerciseTypeId) => state.groupExerciseType.groupExerciseTypes[groupExerciseTypeId];
export const groupExerciseTypeHashTable = state => state.groupExerciseType.groupExerciseTypes;

const sortByName = getFunc => (a, b) => {
    if (getFunc(a) < getFunc(b)) return -1;
    if (getFunc(a) > getFunc(b)) return 1;
    return 0;
};

export const groupExerciseTypeCollection = createSelector(
    groupExerciseTypeHashTable,
    groupExerciseTypeHashTable => Object.keys(groupExerciseTypeHashTable)
                     .map(id => groupExerciseTypeHashTable[id])
                     .sort(sortByName((item => item.activityName))));

export const groupExerciseTypeCategoryCollection = createSelector(
    groupExerciseTypeCollection,
    groupExerciseTypeCollection => groupExerciseTypeCollection.reduce((previous, current) => {
        if (!previous.includes(current.activityGroupName)) {
            previous.push(current.activityGroupName);
        }
        return previous;
    }, []).sort(sortByName(item => item)),
);

