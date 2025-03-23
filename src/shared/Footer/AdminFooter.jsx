import logo from "../../assets/adminLogo.png";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const AdminFooter = () => {
  return (
    <footer className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Logo Section */}
        <div className="shrink-0">
          <img
            src={logo}
            alt="logo"
            className="w-40 md:w-48 lg:w-40 xl:w-52 h-auto object-contain"
          />
        </div>

        {/* Legal Text */}
        <div className="lg:text-center  max-w-2xl  relative">
          <p>
            Terms & conditions Privacy policy Cookies policy Copyrights
            Notification
          </p>
          <span className="text-gray-500 lg:absolute  lg:left-48 lg:top-6">
            All rights reserved.
          </span>
        </div>

        {/* Social Links */}
        <nav className="flex gap-6 lg:gap-4 xl:gap-6 lg:justify-center">
          <a href="/" className="hover:opacity-75 transition-opacity">
            <FaInstagram className="text-2xl md:text-3xl text-[#C8DA27]" />
          </a>
          <a href="/" className="hover:opacity-75 transition-opacity">
            <FaFacebookSquare className="text-2xl md:text-3xl text-[#C8DA27]" />
          </a>
          <a href="/" className="hover:opacity-75 transition-opacity">
            <BsTwitterX className="text-2xl md:text-3xl text-[#C8DA27]" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default AdminFooter;
