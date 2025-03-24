import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
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
import SignIn from "../signIn/SignIn";
import AdminLayout from "../layout/adminLayout/AdminLayout";
import Users from "../AdminPages/Users/Users";
import Doctors from "../AdminPages/Doctors/Doctors";
import Appoinments from "../AdminPages/Appoinments/Appoinments";
import Documents from "../AdminPages/Documents/Documents";
import AddUsers from "../AdminPages/Users/AddUsers/AddUsers";
import AddDoctors from "../AdminPages/Doctors/AddDoctors/AddDoctors";
import AddDocument from "../AdminPages/Documents/AddDocument/AddDocument";
import AddAppoinments from "../AdminPages/Appoinments/AddAppoinments/AddAppoinments";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="case" element={<Case />} />
        <Route path="sales" element={<Sales />} />
        <Route path="story" element={<Story />} />
        <Route path="videos" element={<Videos />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Authentication */}
      <Route path="signIn" element={<SignIn />} />

      {/* Admin Routes */}
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Users />} />
        <Route path="users" element={<Users />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="appointments" element={<Appoinments />} />
        <Route path="documents" element={<Documents />} />
        <Route path="addUsers" element={<AddUsers />} />
        <Route path="addDoctors" element={<AddDoctors />} />
        <Route path="addAppoinment" element={<AddAppoinments />} />
        <Route path="addDocument" element={<AddDocument />} />
      </Route>
    </Route>
  )
);
