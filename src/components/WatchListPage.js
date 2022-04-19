import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';


const WatchListPage = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>My Watchlist</h1>
          <span className='count-pill'>{watchlist.length > 1 ? `${watchlist.length} Movies` : `${watchlist.length} Movie`}</span>
        </div>

        {watchlist.length > 0 ? (
          <div className ='movie-grid'>
            {watchlist.map((item) => (
              <MovieCard key={item.id} movie={item} type="watchlist"/>
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>No movies in your watchlist</h2>
        )}
      </div>
    </div>
  )
}

export default WatchListPage