import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink to={"/about"}>
        <li>About us</li>
      </NavLink>
      <NavLink to={"/about"}>
        <li>Team</li>
      </NavLink>
      <NavLink to={"/about"}>
        <li>Sales details</li>
      </NavLink>
      <NavLink to={"/about"}>
        <li>Story</li>
      </NavLink>
      <NavLink to={"/about"}>
        <li>How-to videos</li>
      </NavLink>
      <NavLink
        to={"/about"}
        className="btn bg-[#C8DA27] text-black rounded text-xl  font-inter py-6 px-4 lg:ml-5"
      >
        <li>Contact</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar font-inter ">
      <div className="navbar-start">
        <div className="md:hidden mr-10">
          <Sidebar></Sidebar>
        </div>
        <a href="/">
          <img src={logo} className="w-7xl md:w-full " alt="logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex items-center ">
        <ul className="menu menu-horizontal px-1 gap-16 text-xl items-center ">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
