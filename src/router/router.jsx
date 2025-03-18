import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import MainLayout from "../layout/main/MainLayout";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<Home />}></Route>
      <Route path="/team" element={<Home />}></Route>
      <Route path="/sales" element={<Home />}></Route>
      <Route path="/story" element={<Home />}></Route>
      <Route path="/videos" element={<Home />}></Route>
      <Route path="/contact" element={<Home />}></Route>
    </Route>
  )
);
