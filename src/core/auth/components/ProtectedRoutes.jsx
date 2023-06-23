import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useUser } from '../hooks/useUser';


export const ProtectedRoutes = ({children}) => {
   
   const {user} = useUser();

    if (!user) {
        return <Navigate to="/login" />;
      } 
      return children;
}

export default ProtectedRoutes