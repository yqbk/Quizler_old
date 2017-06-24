import { api } from '../../api';

export const getMyActivityHistory = (interval = '3m') => {
    const body = { interval };
    return api.get('activities', body);
};
