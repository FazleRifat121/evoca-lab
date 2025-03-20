import Form from "./Form";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { BiSolidPhoneCall } from "react-icons/bi";
const Banner = () => {
  return (
    <div className="md:ml-10 lg:ml-32 mt-20  h-[300px] lg:h-[600px]  flex flex-col items-start justify-center hero">
      <div className=" flex items-center justify-between">
        <div className=" text-white w-full">
          <h1 className="text-6xl text-white">Contact</h1>
        </div>
      </div>
      <div className="mt-20 md:mt-32 flex flex-col lg:flex-row justify-center items-baseline   ">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4 text-white">
            <h1 className="text-3xl font-light ">Write us a message</h1>
            <p className="w-[532px]">
              Send us a message anytime. Our team is ready to assist you
              promptly. Contact us now!
            </p>

            <ul className="space-y-4 text-[#d9d9d996]">
              <li className="flex gap-2 items-center">
                <MdEmail className="text-[#C8DA27]" />
                Your Email
              </li>
              <li className="flex gap-2 items-center">
                <SiMinutemailer className="text-[#C8DA27]" />
                Your Mail Address
              </li>
              <li className="flex gap-2 items-center">
                <BiSolidPhoneCall className="text-[#C8DA27]" />
                000 123 456
              </li>
            </ul>
          </div>

          {/* Form Container */}
        </div>
        <Form></Form>
      </div>
    </div>
  );
};

export default Banner;
