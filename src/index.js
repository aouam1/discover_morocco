
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import {galerie} from './data/trips'
import Home from './pages/home-page';
import Detailstrips from './pages/details-trips';
import Header from "./components/Header";
import LogSign from "./components/LogSign";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // element: <Header />,
  },
  {
    path: "/:city",
    element: <Detailstrips />,
  },
  {
    path: "/login",
    // element: <Login galerie={galerie} />,
     element: <LogSign/>,
  },
  {
    path: "/SignUp",
    // element: <Login galerie={galerie} />,
     element: <SignUp/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);