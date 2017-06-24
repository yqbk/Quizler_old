import { api } from '../api';

export const login = (username, password) => api.post('auth/login', {
    userId: username,
    passWord: password,
});

export const resetPassword = username => api.post('members/sendpassword', {
    userId: username,
});
