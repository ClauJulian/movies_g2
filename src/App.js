import React from "react";
<<<<<<< HEAD
=======
import { RouterProvider } from "react-router-dom";
import RooterProvider from "./core/providers/RooterProvider";
import appRouter from "./core/router/app.router";
>>>>>>> clau_dev


const App = () => {
  return (
<<<<<<< HEAD
    <div>APP</div>
=======
    <RooterProvider>
      <RouterProvider router={appRouter}/>
    </RooterProvider>
>>>>>>> clau_dev
  );
};

export default App;