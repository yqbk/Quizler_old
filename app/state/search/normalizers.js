export const normalizeGroupExercises = groupExercisesCollection => groupExercisesCollection.reduce((previous, current) => {
    previous[current.id] = current;
    return previous;
}, {});
