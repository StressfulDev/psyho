import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import "./index.css";

import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Layout><Home/></Layout>,
    element: <Layout><Home/></Layout>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
