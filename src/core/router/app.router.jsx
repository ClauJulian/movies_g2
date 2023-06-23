import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeView from '../../pages/home/views/HomeView'
import LoginView from '../../pages/login/views/LoginView'
import ProtectedRoutes from '../auth/components/ProtectedRoutes';
import PublicRoutes from '../auth/components/PublicRoutes';

export const appRouter = createBrowserRouter([
    {
        path:"/",
        element:(<ProtectedRoutes><HomeView/></ProtectedRoutes>)
    },
    {
        path:"/login",
        element:(<PublicRoutes><LoginView/></PublicRoutes>)
    },
    
]);

export default appRouter