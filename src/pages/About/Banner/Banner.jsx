import Navbar from "../../../shared/Navbar/main/Navbar";
import "./animatedBg.css";

const Banner = () => {
  return (
    <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] max-w-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#313411] to-[#393E0E] animate-gradient" />

      {/* Content Container */}
      <div className="absolute inset-x-0  top-5 bottom-0 z-10 w-full max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1377px] mx-auto h-full lg:border border-b-0 rounded-t-xl px-4 md:px-8 lg:px-10 py-6">
        <div className="h-full flex flex-col">
          <Navbar />

          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-white w-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-400 mb-6 md:mb-8">
                What is <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8DA27] to-[#8F9C1C] text-5xl md:text-6xl lg:text-7xl xl:text-8xl block mt-4">
                  Evoca?
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
