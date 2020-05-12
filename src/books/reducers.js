import actionTypes from "./actionTypes";

const initialState = {
    booksList: [],
    currentBook: null
};

function books(state = initialState, action) {

    switch (action.type) {

        case actionTypes.BOOKS_FETCH:
            if (action.payload) {
                return Object.assign({}, state, {
                    booksList: action.payload
                });
            } else {
                return Object.assign({}, state, {
                    booksList: []
                });
            }

        case actionTypes.BOOKS_FETCH_BOOK_BY_ID:

            if (action.payload) {

                return Object.assign({}, state, {
                    currentBook: action.payload
                });
            } else {
                return {...state}
            }

        // case actionTypes.BOOKS_GET_FAVORITES:
        // case actionTypes.BOOKS_ADD_TO_FAVORITES:
        // case actionTypes.BOOKS_REMOVE_FROM_FAVORITES:
        //     return Object.assign({}, state, {
        //         favorites: action.payload
        //     });

        default:
            return {...state}
    }
}

export default books;