import axios from "axios";
import ls from "../helpers/localStorage";
import actionTypes from "./actionTypes";

/**
 *
 * @returns {Function}
 */
export const fetchBooks = () => {

    const localData = ls.getBooksList();
    if (localData &&
        localData.list &&
        localData.list.length) {

        //  todo: verify localData.ts

        return {
            type: actionTypes.BOOKS_FETCH,
            payload: localData.list
        }
    }

    return function (dispatch) {

        axios.get("https://comicclan.vett.io/comics", {
            headers: {"Authorization": "Bearer ComicClanVettIO2019"}
        }).then(result => {

            ls.saveBooksList({
                ts: new Date().getTime(),
                list: result.data
            });

            dispatch(
                {
                    type: actionTypes.BOOKS_FETCH,
                    payload: result.data
                }
            )
        }).catch(err => {
            console.error(err);
            dispatch(
                {
                    type: actionTypes.BOOKS_FETCH,
                    payload: null,
                }
            )
        })

    }

};

/**
 *
 * @param id
 * @returns {Function|{payload: *, type: string}}
 */
export const fetchBookById = (id) => {

    let theBook;
    const booksCache = ls.getBooksList();
    if (booksCache) {
        theBook = booksCache.list.find(book => book.name === id)
    }
    if (theBook) {
        console.info(`from cache: ${id}`)
        return {
            type: actionTypes.BOOKS_FETCH_BOOK_BY_ID,
            payload: theBook
        }
    }

    return function (dispatch) {

        axios.get("https://comicclan.vett.io/comics", {
            params: {"q": id},
            headers: {"Authorization": "Bearer ComicClanVettIO2019"}
        }).then(result => {
            const book = result.data[0];
            // ls.saveViewedBook(book);
            dispatch(
                {
                    type: actionTypes.BOOKS_FETCH_BOOK_BY_ID,
                    payload: book
                }
            )
        }).catch(err => {
            console.error(err);
            dispatch(
                {
                    type: actionTypes.BOOKS_FETCH_BOOK_BY_ID,
                    payload: null,
                }
            )
        })

    }

};