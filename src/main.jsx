import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routers/Router.jsx";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./components/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";

ReactGA.initialize("G-6D9WCFRD89");

ReactGA.send({ hitType: "pageview", page: "/" });


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
