import actionTypes from "./actionTypes";

const initialState = {
    account: null,
    favorites: new Set(),
};

function user(state = initialState, action) {

    switch (action.type) {

        case actionTypes.USER_GET_ACCOUNT_SETTINGS:
            return Object.assign({}, state, {
                account: action.payload
            });

        case actionTypes.USER_GET_BOOKS_FAVORITES:
        case actionTypes.USER_REMOVE_BOOK_FROM_FAVORITES:
        case actionTypes.USER_ADD_BOOK_TO_FAVORITES:
            return Object.assign({}, state, {
                favorites: action.payload
            });

        default:
            return {...state}
    }
}

export default user;