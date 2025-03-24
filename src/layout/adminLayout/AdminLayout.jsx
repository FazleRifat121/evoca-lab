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
        <div className="mt-auto">
          <AdminFooter></AdminFooter>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
