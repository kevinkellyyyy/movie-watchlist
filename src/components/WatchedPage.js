import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const WatchedPage = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'>Watched</h1>
          <span className='count-pill'>{watched.length > 1 ? `${watched.length} Movies` : `${watched.length} Movie`}</span>
        </div>

        {watched.length > 0 ? (
          <div className ='movie-grid'>
            {watched.map((item) => (
              <MovieCard key={item.id} movie={item} type="watched"/>
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>You haven't watched anything</h2>
        )}
      </div>
    </div>
  )
}

export default WatchedPage