import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layout/main/MainLayout";
import { RouterProvider } from "react-router";
import { router } from "./router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen mx-auto p-4 overflow-x-hidden font-inter">
      <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>
);
