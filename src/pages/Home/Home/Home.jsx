import { FaFacebook } from "react-icons/fa";
import img1 from "../../../assets/Home/logo.png";
import Search from "./Search/Search";
const Home = () => {
  return (
    <div className="max-w-screen mx-auto p-4 text-white">
      <div className="flex justify-center items-center flex-col gap-5  h-[100dvh]">
        <img src={img1} alt="logo" />
        <div className="text-body flex flex-col items-center justify-center">
          <div className="first-part text-center space-y-5">
            <h1 className="md:text-7xl text-5xl  font-extrabold">Evoca Labs</h1>
            <p className="text-lg font-semibold tracking-widest">
              Ai-Powered Memory Assistance
            </p>
          </div>
          <div className="second-part mt-10 space-y-3 flex flex-col items-center justify-center">
            <p className="text-lg font-semibold tracking-widest text-center">
              Be the first to know when we launch! <br />
              Sign up for updates.
            </p>
            <Search></Search>
          </div>

          <div className="third-part mt-20 flex gap-2">
            <h3 className="text-xl font-medium tracking-widest">
              Stay in touch :
            </h3>
            <ul className="flex items-center gap-2">
              <li className="text-2xl flex items-center ">
                <FaFacebook className="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
