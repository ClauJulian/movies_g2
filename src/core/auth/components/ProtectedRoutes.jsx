import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


const ProtectedRoutes = ({ children }) => {
  const { state } = useAuth();

  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;