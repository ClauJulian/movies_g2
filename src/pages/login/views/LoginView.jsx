import  { useState, useEffect } from 'react';
import useSWR from 'swr';
import BannerLogin from '../../../components/bannerLogin/BannerLogin';
import { getPopularMovies} from '../../../services/tmdb.services';
//Clau
import { Card, Spacer, Text } from "@nextui-org/react";
import SignUpForm from '../components/SignUpForm';
import SingInForm from '../components/SingInForm';


const LoginView = () => {
//Euge
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
      };
  
      const randomMovieOrSerie = getRandomMovieOrSerie();
      setBanner(randomMovieOrSerie);
    }, [
      popularMovies,
      popularMoviesIsLoading,
    ]);


//Clau
  const [isRegister, setIsRegister] = useState(false);

  const s = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    abs: {
      position: "absolute",
    },
    card: {
      display: "flex",
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      flexDirection: "column",
      width: "30vw",
      minWidth: "500px",
      maxWidth: "600px",
      backdropFilter: "blur(20px)",
      backgroundColor: "rgba(0,0,0,0.3)",
      border: "1px solid rgba(255,255,255,0.1)",
    },
    title: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    hiperlink: {
      cursor: "pointer",
    },
  };


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
  



  {/* // clau */}

       <div  
      style={{
      marginTop: "100px",
      width: "100vw",
    }}>
        
         
         <Card css={s.card}>
               <Card.Body>
                 <div style={s.title}>
                  
                   <Text h2>
                     {isRegister
                       ? "Registrate en Movie App"
                      : "Bienvenido a Movie App"}
                   </Text>
                   <Text
                    h3
                    color="primary"
                    onClick={() => setIsRegister(!isRegister)}
                    css={s.hiperlink}
                  >
                     {isRegister
                       ? "o puedes Inicia sesión aquí"
                       : "o puedes Regístrarte aquí"}
                   </Text>
                 </div>

                 {isRegister ? <SignUpForm /> : <SingInForm />}
               </Card.Body>
             </Card> 
            
           

  
      

//     </div>


 

  </>
);
};

export default LoginView;


// import React, {useState} from 'react';
// import { Card, Spacer, Text } from "@nextui-org/react";
// import SignUpForm from '../components/SignUpForm/SignUpForm';
// import SignInForm from '../components/SignInForm/SignInForm';


// const LoginView = () => {

//   const [isRegister, setIsRegister] = useState(false);

//   const s = {
//     container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//     },
//     abs: {
//       position: "absolute",
//     },
//     card: {
//       display: "flex",
//       position: "fixed",
//       left: "50%",
//       top: "50%",
//       transform: "translate(-50%, -50%)",
//       flexDirection: "column",
//       width: "30vw",
//       minWidth: "500px",
//       maxWidth: "600px",
//       backdropFilter: "blur(20px)",
//       backgroundColor: "rgba(0,0,0,0.3)",
//       border: "1px solid rgba(255,255,255,0.1)",
//     },
//     title: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//     },
//     hiperlink: {
//       cursor: "pointer",
//     },
//   };

//   return (
//     <div  
//       style={{
//       marginTop: "100px",
//       width: "100vw",
//     }}>
        
         
//         <Card css={s.card}>
//               <Card.Body>
//                 <div style={s.title}>
                  
//                   <Text h2>
//                     {isRegister
//                       ? "Registrate en Movie App"
//                       : "Bienvenido a Movie App"}
//                   </Text>
//                   <Text
//                     h3
//                     color="primary"
//                     onClick={() => setIsRegister(!isRegister)}
//                     css={s.hiperlink}
//                   >
//                     {isRegister
//                       ? "o puedes Inicia sesión aquí"
//                       : "o puedes Regístrarte aquí"}
//                   </Text>
//                 </div>

//                 {isRegister ? <SignUpForm /> : <SignInForm />}
//               </Card.Body>
//             </Card>
            
           

  
      

//     </div>

//   )
// }

// export default LoginView