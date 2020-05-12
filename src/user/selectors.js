
export const getFavoritesCount = state => {
    return {
        favoritesCount: state.user.favorites.size
    }
};

export const getFavorites = state => {
    return {
        favorites: {
            list: state.user.favorites,
            isFavorite: (bookId) => state.user.favorites.has(bookId),
        }
    }
};

export const getAccount = state => {
  return state.user.account
};