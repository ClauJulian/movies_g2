import React from "react";
import { RouterProvider } from "react-router-dom";
import RooterProvider from "./core/providers/RooterProvider";
import appRouter from "./core/router/app.router";


const App = () => {
  return (
    <RooterProvider>
      <RouterProvider router={appRouter}/>
    </RooterProvider>
  );
};

export default App;
