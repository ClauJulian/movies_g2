import { Spacer } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Banner from '../../../components/banner/Banner';
import CarouselAndTitle from '../../../components/Carousel/CarouselAndTitle';
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
                }}
              >
                  <CarouselAndTitle
                  title="Las más populares"
                  data={popularMovies}
                  isLoading={popularMoviesIsLoading}
                  >
                  </CarouselAndTitle>

                  <Spacer y={2} />

                  <CarouselAndTitle
                  title="Mis preferidas"
                  data={popularMovies}
                  isLoading={popularMoviesIsLoading}
                  >
                  </CarouselAndTitle>


              </div>    

      
        </div>

    </div>
  )
}

export default HomeView