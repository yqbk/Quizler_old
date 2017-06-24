import { create } from 'axios';
import { token } from './../../selectors/auth';
import { getStore } from './../store';
import { logout } from './../../state/auth/actions';
import { SERVICE_PLATFORM_API_URL } from './../../config/general';

export const api = create({
    baseURL: SERVICE_PLATFORM_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((request) => {
    const authToken = token(getStore().getState());

    if (authToken) {
        request.headers['X-CookieAuthentication'] = `Auth-SatsElixia=${token(getStore().getState())}`;
    }

    return request;
});

api.interceptors.response.use(response => response.data, (error) => {
    if (error.response.status === 401) {
        getStore().dispatch(logout());
    }

    return Promise.reject(error);
});
