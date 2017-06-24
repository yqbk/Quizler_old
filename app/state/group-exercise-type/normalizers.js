export const normalizeGroupExerciseTypes = groupExerciseTypeCollection => groupExerciseTypeCollection.reduce((previous, current) => {
    previous[current.activityId] = current;
    return previous;
}, {});
