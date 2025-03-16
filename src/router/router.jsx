import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import MainLayout from "../layout/main/MainLayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />}></Route>
    </Route>
  )
);
