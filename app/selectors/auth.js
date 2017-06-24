export const token = state => state.auth.token;
export const userModel = state => state.auth.userModel;
export const isLoggedIn = state => state.auth.request.isFetching;
export const isFetching = state => state.auth.request.isFetching;
export const didInvalidate = state => state.auth.request.didInvalidate;
export const didSkipLogin = state => state.auth.didSkipLogin;
