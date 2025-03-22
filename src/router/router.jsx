import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import MainLayout from "../layout/main/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Team from "../pages/Team/Team";
import Story from "../pages/Story/Story";
import Contact from "../pages/Contact/Contact";
import Case from "../pages/Case/Case";
import Videos from "../pages/Videos/Videos";
import Sales from "../pages/Sales/Sales";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="/case" element={<Case />}></Route>
      <Route path="/sales" element={<Sales />}></Route>
      <Route path="/story" element={<Story />}></Route>
      <Route path="/videos" element={<Videos />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Route>
  )
);
