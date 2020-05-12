import ls from "../helpers/localStorage";
import actionTypes from "./actionTypes";

/**
 *
 * @returns {{payload: {user: {uid: string, username: string, email: string}, token: string}, type: string}}
 */
export const getLocalUserData = () => {

    return {
        type: actionTypes.AUTH_GET_LOCAL_USERDATA,
        payload: {
            ...ls.getAuthData()
        }
    }
};
/**
 *
 * @param data
 * @returns {{payload: *, type: *}}
 */
export const login = data => {

    ls.setAuthData(data);
    return {
        type: actionTypes.AUTH_LOGIN,
        payload: data
    }

};
/**
 *
 * @param data
 * @returns {{payload: *, type: *}}
 */
export const register = data => {

    ls.setAuthData(data);
    return {
        type: actionTypes.AUTH_REGISTER,
        payload: data
    }
};