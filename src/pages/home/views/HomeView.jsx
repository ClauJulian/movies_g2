import { Spacer } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Banner from '../../../components/banner/Banner';
import CarouselAndTitle from '../../../components/Carousel/CarouselAndTitle';
import useFavorites from '../../../hooks/useFavorites';
import { getPopularMovies, getMovieDetails } from '../../../services/tmdb.services';
import { useAuth } from "../../../hooks/useAuth";
import { getPopularMovies, getMovieDetails, getTopRated, getUpcomingMovies } from '../../../services/tmdb.services';



export const HomeView = () => {

  const { favorites: favIds } = useFavorites();

  // console.log(favIds);

  // const promises =  getMovieDetails(favIds);
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

 const { data: favorites, isLoading: favoritesIsLoading } = useSWR(
    ["getFavorites", favIds],
    () => {

      if (!favIds) return;
      
      const promises = favIds.map((id) => getMovieDetails(id));

      console.log(promises);

      return Promise.allSettled(promises).then((res) => {
          const data = res
            .filter((e) => e.status === "fulfilled")
            .map((e) => e.value);
          return data.flat();
        });
      }
      );


    const { data: popularMovies, isLoading: popularMoviesIsLoading } = useSWR(
        "getPopularMovies",
        () => getPopularMovies()
      );

      const { data: topRatedMovies, isLoading: topRatedMoviesIsLoading } = useSWR(
        "getTopRated",
        () => getTopRated()
      );
    
      const { data: upComingMovies, isLoading: upComingMoviesIsLoading } = useSWR(
        "getUpcomingMovies",
        () => getUpcomingMovies()
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
              <button onClick={handleLogout}>Cerrar Sesión</button>
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
                  title="Mejor calificadas"
                  data={topRatedMovies}
                  isLoading={topRatedMoviesIsLoading}
                  >
                  </CarouselAndTitle>

                  <Spacer y={2} />

                  

                  <Spacer y={2} />

                  <CarouselAndTitle
                  title="A estrenar"
                  data={upComingMovies}
                  isLoading={upComingMoviesIsLoading}
                  >
                  </CarouselAndTitle>

                  <Spacer y={2} />

                 

                  <Spacer y={2} />

                  <CarouselAndTitle
                  title="Mis preferidas"
                  data={favorites}
                  isLoading={favoritesIsLoading}
                  >
                  </CarouselAndTitle>

                  <Spacer y={10} />


              </div>    

      
        </div>

    </div>
  )
}

export default HomeView
