import { Outlet } from "react-router";
import Navbar from "../../shared/Navbar/Admin/Navbar";

import AdminFooter from "../../shared/Footer/AdminFooter";

const AdminLayout = () => {
  return (
    <div>
      <div className="container mx-auto p-4 font-inter">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <AdminFooter></AdminFooter>
      </div>
    </div>
  );
};

export default AdminLayout;
