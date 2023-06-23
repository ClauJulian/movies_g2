import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeView from '../../pages/home/views/HomeView'
import LoginView from '../../pages/login/views/LoginView'
import ProtectedRoutes from '../auth/components/ProtectedRoutes';
import PublicRoutes from '../auth/components/PublicRoutes';
import PublicLayouts from '../layouts/Public/PublicLayouts';

export const appRouter = createBrowserRouter([
    {
        path:"/",
        element:(
            <ProtectedRoutes>
                <PublicLayouts>
                    <HomeView/>
                </PublicLayouts>
            </ProtectedRoutes>
        )
    },
    {
        path:"/login",
        element:(
            <PublicRoutes>
                <PublicLayouts>
                    <LoginView/>
                </PublicLayouts>
            </PublicRoutes>
            )
    },
    
]);

export default appRouter