import actionTypes from "./actionTypes";

const initialState = {
    token: null,
    user: null, // {uid, username, email},
};

function auth(state = initialState, action) {

    switch (action.type) {
        case actionTypes.AUTH_LOGIN:
        case actionTypes.AUTH_REGISTER:
        case actionTypes.AUTH_GET_LOCAL_USERDATA:
            return {...action.payload};

        default:
            return {...state}
    }
}

export default auth;