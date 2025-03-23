import { Outlet } from "react-router";
import Navbar from "../../shared/Navbar/Admin/Navbar";
import Footer from "../../shared/Footer/Footer";

const AdminLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AdminLayout;
