import React from 'react';
import useSWR from 'swr';
import { getPopularMovies } from '../../../services/tmdb.services';

export const HomeView = () => {

    const { data: popularMovies, isLoading: popularMoviesIsLoading } = useSWR(
        "getPopularMovies",
        () => getPopularMovies()
      );
    
  return (
    <div>
        <h1>HomeView</h1>
        {!popularMoviesIsLoading && popularMovies.map((movie)=>{
            
            const path=movie.poster_path;            
            const poster_URL="https://image.tmdb.org/t/p/w300"+ path;
            return <div key={movie.id}>
                <div>{movie.title}</div> 
                <img src={poster_URL} alt="poster"/> 
            </div>

            })}
        

    </div>
  )
}

export default HomeView