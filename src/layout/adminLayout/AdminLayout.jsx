import { Outlet } from "react-router";
import Navbar from "../../shared/Navbar/Admin/Navbar";

import AdminFooter from "../../shared/Footer/AdminFooter";

const AdminLayout = () => {
  return (
    <div>
      <div className="container mx-auto p-4 font-inter">
        <div className="h-screen">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <AdminFooter></AdminFooter>
      </div>
    </div>
  );
};

export default AdminLayout;
