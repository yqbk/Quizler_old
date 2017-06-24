import { api } from '../api';
import { COUNTRY } from '../../../config/general';

export const getGroupExercises = ({ centers = [], activities = [], timeOfDay = [], dates = [] }, page = 0, resultSize = 100) => {
    const body = {
        dates,
        centers,
        timeOfDay,
        activityNames: activities,
        returnAggregations: false,
        resultSize,
        resultPage: page,
    };

    return api.post(`${COUNTRY}/groupexercises`, body);
};
