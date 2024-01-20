import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import AllOrders from '../pages/orders/AllOrders.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/orders',
            element: <AllOrders></AllOrders>
        },
      ]
    },
  ]);

export default router;