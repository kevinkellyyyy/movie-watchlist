import React, { createContext, useReducer, useEffect } from "react";
import { GlobalReducer } from "./GlobalReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
  watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component for accessing the data in component that inside this provider element
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  // action, tell the provider to tell what to do to globalreducer when click button or triggered function
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchList = (movieId) => {
    dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: movieId});
  }

  const addMovieToWatched = (movie) => {
    dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie});
  }

  const moveToWatchList = (movie) => {
    dispatch({type: "MOVE_TO_WATCHLIST", payload: movie});
  }

  const removeMovieFromWatched = (movieId) => {
    dispatch({type: "REMOVE_MOVIE_FROM_WATCHED", payload: movieId});
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList,
        removeMovieFromWatchList,
        addMovieToWatched,
        moveToWatchList,
        removeMovieFromWatched
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
