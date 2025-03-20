import card1 from "../../../assets/About/Banner/card-1.png";
import card2 from "../../../assets/About/Banner/card-2.png";

const Hero = () => {
  return (
    <div>
      <div className="w-full lg:w-[1070px] lg:mx-auto p-4 ">
        <div className="my-5 border border-[#1C1D1C] rounded ">
          <div className=" md:p-10">
            <div className="flex flex-col lg:flex-row items-center">
              <img
                src={card1}
                className="w-[400px] md:max-w-sm rounded-lg shadow-2xl"
              />
              <div className="texts bg-linear-0 from-[#252A25] to-[#3D4D3D] h-56 w-56 md:w-[549px] md:h-[235px] flex justify-center space-y-5 flex-col font-inter rounded-lg ">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8DA27] to-[#8F9C1C] text-2xl ml-10">
                  Evoca?
                </h1>
                <p className="ml-10">Lorem ipsum dolor sit amet consectetur.</p>
                <p className="ml-10">Learn more →</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[1070px] lg:mx-auto p-4 ">
        <div className="my-5 border border-[#1C1D1C] rounded ">
          <div className=" md:p-10">
            <div className="flex  flex-col lg:flex-row-reverse items-center">
              <img
                src={card2}
                className="w-[400px] md:max-w-sm rounded-lg shadow-2xl"
              />
              <div className="texts bg-linear-0 from-[#252A25] to-[#3D4D3D] h-56 w-56 md:w-[549px] md:h-[235px] flex justify-center space-y-5 flex-col font-inter rounded-lg ">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8DA27] to-[#8F9C1C] text-2xl ml-10">
                  Evoca?
                </h1>
                <p className="ml-10">Lorem ipsum dolor sit amet consectetur.</p>
                <p className="ml-10">Learn more →</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
