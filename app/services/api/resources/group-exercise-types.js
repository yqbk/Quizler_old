import { api } from '../api';
import { COUNTRY } from '../../../config/general';

export const getGroupExerciseTypes = () => api.get(`${COUNTRY}/groupexercisetypes`);
