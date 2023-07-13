import  { useState, useEffect } from 'react';
import useSWR from 'swr';
import BannerLogin from '../../../components/bannerLogin/BannerLogin';
import { getPopularMovies} from '../../../services/tmdb.services';



const LoginView = () => {

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
<>

{/* // Euge */}
    <div  
      style={{
      marginTop: "100px",
      width: "100vw",
    }}>
        
        <div
                style={{
                marginTop: "100px",
                }}
              >
                <BannerLogin data={banner}/>
              </div> 
    </div>
  

  </>
);
};

export default LoginView;
