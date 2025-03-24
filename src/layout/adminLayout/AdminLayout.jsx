import { Outlet } from "react-router";
import Navbar from "../../shared/Navbar/Admin/Navbar";

import AdminFooter from "../../shared/Footer/AdminFooter";

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto p-4 font-inter">
        <Outlet />
      </div>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
