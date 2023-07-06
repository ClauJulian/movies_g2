import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser'; 

export const PublicRoutes = ({children}) => {
      
    const {user} = useUser();
    
    if (user) {
        return <Navigate to="/" />;
      }
    
      return children;
}

export default PublicRoutes









// CHAT GPT -> Si usamos Firebase para el Login como saber si hay alguien logueado

// import React, { useEffect, useState } from 'react';
// import firebase from './firebase';

// const MyComponent = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         // El usuario está logueado
//         setUser(user);
//       } else {
//         // El usuario no está logueado
//         setUser(null);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <p>¡El usuario está logueado!</p>
//       ) : (
//         <p>El usuario no está logueado.</p>
//       )}
//     </div>
//   );
// };

// export default MyComponent;
