export const getBooksList = (state) => {

    return {
        booksList: state.books.booksList || [],
        shouldFetch: !state.books.booksList.length
    };
};

export const getBookById = (state, bookId) => {
    let bookData = bookId === state.books.currentBook?.name ? state.books.currentBook : null;
    return {
        bookData: bookData,
        shouldFetch: bookData === null,
        isFavorite: state.user.favorites.has(bookId)
    };
};