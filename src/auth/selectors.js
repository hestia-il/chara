export const getAuthData = (state) => {
    return {
        ...state.auth,
        loggedIn: !!state.auth.token
    }
};

export const getToken = state => {
    return state.auth.token
};