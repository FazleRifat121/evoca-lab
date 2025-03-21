// Banner.jsx
import Form from "./Form";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { BiSolidPhoneCall } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-12">
      <div className="mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold">
          Contact
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 w-full">
        {/* Contact Info */}
        <div className="flex-1 max-w-2xl">
          <div className="space-y-6 md:space-y-8 text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">
              Write us a message
            </h2>
            <p className="text-base md:text-lg lg:text-xl max-w-prose">
              Send us a message anytime. Our team is ready to assist you
              promptly. Contact us now!
            </p>

            <ul className="space-y-4 md:space-y-6 text-[#d9d9d996]">
              <li className="flex items-center gap-3 text-sm md:text-base lg:text-lg">
                <MdEmail className="text-[#C8DA27] text-xl md:text-2xl flex-shrink-0" />
                your.email@example.com
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base lg:text-lg">
                <SiMinutemailer className="text-[#C8DA27] text-xl md:text-2xl flex-shrink-0" />
                123 Business Street, City
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base lg:text-lg">
                <BiSolidPhoneCall className="text-[#C8DA27] text-xl md:text-2xl flex-shrink-0" />
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex-1 max-w-3xl">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Banner;
