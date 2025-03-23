import { NavLink } from "react-router";
import logo from "../../../assets/adminLogo.png";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const links = (
    <>
      <NavLink
        to={"users"}
        className={({ isActive, isPending }) =>
          `p-1 ${isPending ? "text-blue-500" : "text-black"} ${
            isActive
              ? "border border-black w-16 text-center rounded-2xl px-2 py-0"
              : ""
          }`
        }
      >
        <li>Users</li>
      </NavLink>
      <NavLink
        to={"doctors"}
        className={({ isActive, isPending }) =>
          `p-1 ${isPending ? "text-blue-500" : "text-black"} ${
            isActive
              ? "border border-black w-20 text-center rounded-2xl px-2 py-0"
              : ""
          }`
        }
      >
        <li>Doctors</li>
      </NavLink>
      <NavLink
        to={"appointments"}
        className={({ isActive, isPending }) =>
          `p-1 ${isPending ? "text-blue-500" : "text-black"} ${
            isActive
              ? "border border-black w-32 text-center rounded-2xl px-2 py-0"
              : ""
          }`
        }
      >
        <li>Appointments</li>
      </NavLink>
      <NavLink
        to={"documents"}
        className={({ isActive, isPending }) =>
          `p-1 ${isPending ? "text-blue-500" : "text-black"} ${
            isActive
              ? "border border-black w-24 text-center rounded-2xl px-2 py-0"
              : ""
          }`
        }
      >
        <li>Documents</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar font-inter">
      <div className="navbar-start">
        <div className="lg:hidden mr-4">
          <Sidebar />
        </div>
        <a href="/" className="ml-4 lg:ml-0">
          <img
            src={logo}
            className="w-48 md:w-56 lg:w-64 xl:w-72 object-contain"
            alt="logo"
          />
        </a>
      </div>
      <div className="lg:ml-8 navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 gap-16 text-md items-center">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
