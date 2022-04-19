// build a store which store our state data globally,
// unction for return the state data
// tells our store what to do with the data

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    default:
      return state;
  }
};
