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
      <NavLink to={"/team"}>
        <li>Team</li>
      </NavLink>
      <NavLink to={"/case"}>
        <li>Case Studies</li>
      </NavLink>
      <NavLink to={"/about"}>
        <li>Sales details</li>
      </NavLink>
      <NavLink to={"/story"}>
        <li>Story</li>
      </NavLink>
      <NavLink to={"/about"}>
        <li>How-to videos</li>
      </NavLink>
      <NavLink
        to={"/contact"}
        className="btn bg-[#C8DA27] text-black rounded text-xl  font-inter py-6 px-4 lg:ml-5"
      >
        <li>Contact</li>
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
