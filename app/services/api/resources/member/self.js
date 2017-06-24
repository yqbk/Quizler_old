import { api } from '../../api';

export const getMyModel = () => api.get('members/self');
