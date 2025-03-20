import Navbar from "../../../shared/Navbar/Navbar";
import "./animatedBg.css";
const Banner = () => {
  return (
    <div className="relative min-h-[400px] max-w-screen overflow-hidden  ">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#313411] to-[#393E0E] animate-gradient"></div>

      {/* Content - Modified div */}
      <div className="absolute inset-x-0 bottom-0 z-10 w-[300px] md:w-[700px] lg:w-[1377px] p-5 mx-auto h-[calc(100%-2.5rem)] border border-b-0 rounded-t-xl">
        <div>
          <Navbar />
          <div className="text-center text-white pt-20">
            <h1 className="text-3xl text-gray-400 mb-8">
              What is <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8DA27] to-[#8F9C1C] text-5xl lg:text-7xl animated-gradient">
                Evoca?
              </span>
            </h1>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
