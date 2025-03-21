import { MdClose } from "react-icons/md";
import { NavLink } from "react-router";

const Sidebar = () => {
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
    <div className="z-30">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost drawer-button"
            >
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
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-5">
            {/* Sidebar content here */}
            {links}

            <label htmlFor="my-drawer">
              <div className="btn mt-10 hidden show-on-mobile drawer-button text-lg w-20 font-bold text-white">
                <MdClose />
              </div>
            </label>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
