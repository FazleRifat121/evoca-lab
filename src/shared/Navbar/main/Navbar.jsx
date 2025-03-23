import { NavLink } from "react-router";
import logo from "../../../assets/logo.png";
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
      <NavLink to={"/sales"}>
        <li>Sales details</li>
      </NavLink>
      <NavLink to={"/story"}>
        <li>Story</li>
      </NavLink>
      <NavLink to={"/videos"}>
        <li>How-to videos</li>
      </NavLink>
      <li>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button">
            Hover
          </div>
          <ul tabIndex={0} className="dropdown-content menu space-y-5">
            <NavLink to={"/signIn"}>
              <li>SignIn</li>
            </NavLink>
            <NavLink to={"/admin"}>
              <li>Admin</li>
            </NavLink>
          </ul>
        </div>
      </li>

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
        <NavLink to="/" className="flex items-center ml-4 lg:ml-0 ">
          <img
            src={logo}
            className="w-32 md:w-40 lg:w-48 xl:w-56 h-auto object-contain block" // Fixed sizing
            alt="logo"
          />
        </NavLink>
      </div>
      <div className="lg:ml-8 navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 gap-10 text-md items-center">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
