import robot from "../../../../assets/Home/Banner/robot.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-32 font-inter px-4 py-8 md:py-0">
      {/* Text Content */}
      <div className="text-white text-center md:text-left space-y-4 md:space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-[130px] leading-tight md:leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#C8DA27] to-[#8F9C1C] mt-5 lg:mt-0">
          AI-powered
        </h1>
        <p className="text-xl sm:text-2xl lg:text-6xl font-light ">
          memory assistance
        </p>
      </div>

      {/* Image */}
      <figure className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px]">
        <img src={robot} alt="robot" className="w-full h-auto object-contain" />
      </figure>
    </div>
  );
};

export default Banner;
