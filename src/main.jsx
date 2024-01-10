import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routers/Router.jsx";
import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./components/ThemeProvider";
// import { Providers } from "./Redux/providers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
   
  </React.StrictMode>
);