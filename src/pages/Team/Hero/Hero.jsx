import card1 from "../../../assets/Team/Banner/card-1.png";
import card2 from "../../../assets/Team/Banner/card-2.png";

const Hero = () => {
  return (
    <div>
      <div className="w-full lg:w-[1500px] lg:mx-auto p-4 mt-5  border border-[#1C1D1C] rounded-t-[3rem] ">
        <div className="my-5 space-y-5 ">
          {/* first  */}
          <div className="p-5 md:p-10 flex flex-col items-center lg:gap-5">
            <div className="flex flex-col justify-center lg:flex-row-reverse items-center gap-20">
              <img src={card1} />
              <div className=" flex justify-center flex-col font-inter md:rounded-lg  ">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8DA27] to-[#8F9C1C] text-2xl">
                  Evoca
                </h1>
                <p>
                  s simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially un
                </p>
              </div>
            </div>
            <p>
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially un
            </p>
          </div>
          {/* second */}
          <div className="p-5 md:p-10 flex flex-col items-center lg:gap-5">
            <div className="flex flex-col justify-center lg:flex-row items-center gap-20">
              <img src={card2} />
              <div className=" flex justify-center flex-col font-inter md:rounded-lg  text-right">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8DA27] to-[#8F9C1C] text-2xl">
                  Evoca?
                </h1>
                <p>
                  s simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially un
                </p>
              </div>
            </div>
            <p>
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially un
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
