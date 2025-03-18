import robot from "../../../../assets/Home/Banner/robot.png";
import AI from "../../../../assets/Home/Banner/AI-powered memory assistance.png";

const Banner = () => {
  return (
    <div className="h-screen bg-black flex flex-col-reverse gap-10 md:flex-row items-center justify-center lg:gap-52">
      <div className="  text-white">
        <img src={AI} alt="" />
      </div>
      <figure>
        <img src={robot} alt="robot" />
      </figure>
    </div>
  );
};

export default Banner;
