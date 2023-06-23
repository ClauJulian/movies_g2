import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({children}) => {

    // usa vez que se defina la forma de loguearse hay que cambiar esto.
    const user="clau@yahoo.com";

    if (!user) {
        return <Navigate to="/login" />;
      }
    
      return children;
}

export default ProtectedRoutes