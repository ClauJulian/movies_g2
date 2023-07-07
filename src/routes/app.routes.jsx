import { Navigate, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import LoginView from "../pages/login/views/LoginView";

export const Router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const { default: HomeView } = await import(
        "../pages/home/views/HomeView"
      );

      return {
        element: (
          <ProtectedRoute>
            <HomeView />
          </ProtectedRoute>
        ),
      };
    },
  },
  {
    path: "/login",
    element: <LoginView />,
  },
]);
