import { NavLink } from "react-router";
import logo from "../../../assets/logo.png";
import Sidebar from "./Sidebar";
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink to={"/users"}>
        <li>Users</li>
      </NavLink>
      <NavLink to={"/doctors"}>
        <li>Doctors</li>
      </NavLink>
      <NavLink to={"/appointments"}>
        <li>Appointments</li>
      </NavLink>
      <NavLink to={"/documents"}>
        <li>Documents</li>
      </NavLink>
      <li className="relative">
        <input type="text" className="w-32 py-1 bg-[#96C93B]  rounded-2xl" />
        <IoSearchOutline />
      </li>
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
