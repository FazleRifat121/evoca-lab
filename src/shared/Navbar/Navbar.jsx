import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
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
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4"
          >
            {links}
          </ul>
        </div>
        <a className=" text-xl">
          <img src={logo} alt="logo" />
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
