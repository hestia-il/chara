
// const ls = {
export default {
    /**
     *
     * @param data {{token:string, user:*}}
     */
    setAuthData: (data) => {
        localStorage.setItem('d', JSON.stringify(data))
    },
    /**
     *
     * @returns {{token:string, user:{uid:string, username:string, email:string}}|null}
     */
    getAuthData: () => {
        return JSON.parse(localStorage.getItem('d'))
    },
    /**
     *
     */
    clearUserData: () => {
        localStorage.removeItem('d');
    },
    /**
     *
     * @param data
     */
    saveBooksList: (data) => {
        localStorage.setItem('booksList', JSON.stringify(data))
    },
    /**
     *
     * @returns {any}
     */
    getBooksList: () => {
        return JSON.parse(localStorage.getItem('booksList'))
    },
    // /**
    //  *
    //  * @param book
    //  */
    // saveViewedBook: (book) => {
    //     const viewedBooks = getViewedBooks();
    //     viewedBooks[book.name] = book;
    //     localStorage.setItem('viewedBooks', JSON.stringify(viewedBooks));
    //     // sls.set('viewedBooks', viewedBooks);
    // },
    // /**
    //  *
    //  * @param id
    //  * @returns {*|null}
    //  */
    // getViewedBookById: (id) => {
    //     const viewedBooks = getViewedBooks();
    //     return viewedBooks[id] || null
    // },
    /**
     *
     * @param id
     */
    saveToFavorites: (id) => {
        const favorites = _getFavorites();
        favorites.add(id);
        localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
    },
    /**
     *
     * @param id
     */
    removeFromFavorites: (id) => {
        const favorites = _getFavorites();
        favorites.delete(id);
        localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
    },
    /**
     *
     * @returns {Set<any>}
     */
    getFavorites: () => {
        return _getFavorites()
    },
};

// export default ls;

/**
 *
 * @returns {any | {}}
 */
function getViewedBooks() {
    return JSON.parse(localStorage.getItem('viewedBooks')) || {};
    // return sls.get('viewedBooks') || {};
}

function _getFavorites () {
    let data = JSON.parse(localStorage.getItem('favorites'));
    if (data) {
        return new Set(data)
    }
    return new Set();
}