const initialState = {
  favorites: {
    favoriteCities: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case `ADD_TO_FAVORITE`:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          favoriteCities: [...state.favorites.favoriteCities, action.payload],
        },
      };
    case `REMOVE_FAVORITE`:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          favoriteCities: [...state.favorites.favoriteCities.filter((city, i) => i !== action.payload)],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
