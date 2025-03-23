import { Outlet } from "react-router";
import Navbar from "../../shared/Navbar/Admin/Navbar";
import Footer from "../../shared/Footer/Footer";

const AdminLayout = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AdminLayout;
