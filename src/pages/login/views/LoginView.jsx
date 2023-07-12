// Tian
import React, { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import SignInForm from "../components/SingInForm";
import SignUpForm from "../components/SignUpForm";

// Euge
import  {  useEffect } from 'react';
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

// Tian

  const FORMS = {
    SIGN_IN: "SIGN_IN",
    SIGN_UP: "SIGN_UP",
  };

  const [showForm, setShowForm] = useState(FORMS.SIGN_IN);

  const { login } = useAuth();

  const handleShowForm = () => {
    setShowForm((prevState) =>
      prevState === FORMS.SIGN_IN ? FORMS.SIGN_UP : FORMS.SIGN_IN
    );
  };



  return (
<>
{/* // Tian */}
<div>
      <div 
      style={{
      marginTop: "100px",
      width: "100vw",
      }}>
        <h1>Iniciar Sesión</h1>
        <SignInForm />
        <SignUpForm />
      </div>
      </div>
      {showForm === FORMS.SIGN_IN ? <SignUpForm /> : <SignUpForm />}

      <button onClick={handleShowForm}>
        {showForm === FORMS.SIGN_IN ? "Registrarse" : "Iniciar Sesión"}
      </button>






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
