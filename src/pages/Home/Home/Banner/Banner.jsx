import robot from "../../../../assets/Home/Banner/robot.png";
import "./banner.css";

const Banner = () => {
  return (
    <div className="h-screen bg-black flex flex-col-reverse gap-10 md:flex-row items-center justify-center lg:gap-52 font-inter">
      <div className="text-white">
        <h1 className="text-5xl lg:text-[130px] title">AI-powered</h1>
        <p className="lg:text-6xl text-2xl font-light">memory assistance</p>
      </div>
      <figure>
        <img src={robot} alt="robot" className="md:w-xs w-full" />
      </figure>
    </div>
  );
};

export default Banner;
