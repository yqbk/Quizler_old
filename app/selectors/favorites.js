export const favorites = state => state.favorite.favorites;
export const isFavorite = (state, id) => state.favorite.favorites.includes(id);
