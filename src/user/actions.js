import ls from "../helpers/localStorage";
import actionTypes from "./actionTypes";

/**
 *
 * @param token
 * @param id
 * @returns {{payload: *, type: *}}
 */
export const addToFavorites = (token, id) => {
    ls.saveToFavorites(id);
    return {
        type: actionTypes.USER_ADD_BOOK_TO_FAVORITES,
        payload: ls.getFavorites()
    }
};

/**
 *
 * @param token
 * @param id
 * @returns {{payload: *, type: *}}
 */
export const removeFromFavorites = (token, id) => {
    ls.removeFromFavorites(id);
    return {
        type: actionTypes.USER_REMOVE_BOOK_FROM_FAVORITES,
        payload: ls.getFavorites()
    }
};

/**
 *
 * @param token
 * @returns {{payload: *, type: *}|Function}
 */
export const getFavorites = (token = null) => {

    if (!token) {
        return {
            type: actionTypes.USER_GET_BOOKS_FAVORITES,
            payload: ls.getFavorites()
        }
    }

    return dispatch => {
        // get from server
        // if exists - save to ls
        dispatch({
            type: actionTypes.USER_GET_BOOKS_FAVORITES,
            payload: ls.getFavorites()
        })
    }

};