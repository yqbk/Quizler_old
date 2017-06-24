import { api } from '../../api';

export const getMyBookings = () => api.get('members/booking');

export const bookGroupExercise = id => api.post(`members/booking/${id}`);

export const cancelGroupExercise = id => api.delete(`members/booking/${id}`);
