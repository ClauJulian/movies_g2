import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Banner from '../../../components/banner/Banner';
import { getPopularMovies } from '../../../services/tmdb.services';

export const HomeView = () => {

    const { data: popularMovies, isLoading: popularMoviesIsLoading } = useSWR(
        "getPopularMovies",
        () => getPopularMovies()
      );
    
     

    const [banner, setBanner] = useState(null);
    
    useEffect(() => {
      const getRandomMovieOrSerie = () => {
        const random = Math.random() * 10;
  
        if (popularMoviesIsLoading) return;
  
        if (random > 5)
          return popularMovies[Math.floor(Math.random() * popularMovies.length)];
          return popularMovies["1"];
        // return popularSeries[Math.floor(Math.random() * popularSeries.length)];
      };
  
      const randomMovieOrSerie = getRandomMovieOrSerie();
      setBanner(randomMovieOrSerie);
    }, [
      popularMovies,
      popularMoviesIsLoading,
      // popularSeries,
      // popularSeriesIsLoading,
    ]);


  return (
    <div>
        <div
        style={{
          width: "100vw",
        }}
        >
             
              <div
                style={{
                marginTop: "100px",
                }}
              >
                <Banner data={banner}/>
              </div>
                
              <div
                style={{
                marginTop: "100px",
                padding: "0 20px",
                }}
                >
                <div>
                    {!popularMoviesIsLoading && popularMovies.map((movie)=>{
                    
                    const path=movie.poster_path;            
                    const poster_URL="https://image.tmdb.org/t/p/w300"+ path;
                    
                    return <div key={movie.id}>
                        <div>{movie.title}</div> 
                          <img src={poster_URL} alt="poster"/> 
                        </div>
                
                    })}
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeView