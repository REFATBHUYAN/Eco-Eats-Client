import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AllOrders from "../pages/orders/AllOrders.jsx";
import SingleOrders from "../pages/orders/SingleOrders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/orders",
      //   element: <AllOrders></AllOrders>,
      // },
      // {
      //   path: "/orders/:id",
      //   element: <SingleOrders></SingleOrders>,
      // },
    ],
  },
  {
    path: "/orders",
    element: <AllOrders></AllOrders>,
  },
  {
    path: "/orders/:id",
    element: <SingleOrders></SingleOrders>,
  },
]);

export default router;
