import logo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <a href="/">
          {" "}
          <img src={logo} alt="logo" />
        </a>
      </aside>
      <div className="relative">
        <p>
          Terms & conditions Privacy policy Cookies policy Copyrights
          Notification
        </p>
        <span className="text-gray-500 absolute top-10 lg:left-48 lg:top-6">
          All rights reserved.
        </span>
      </div>

      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="link">
          <FaInstagram className="text-3xl text-[#C8DA27]" />
        </a>
        <a href="link">
          <FaFacebookSquare className="text-3xl text-[#C8DA27]" />
        </a>
        <a href="link">
          <BsTwitterX className="text-3xl text-[#C8DA27]" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
