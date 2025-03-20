import card1 from "../../../assets/Story/Card/card-1.png";
import card2 from "../../../assets/Story/Card/card-2.png";

const Hero = () => {
  return (
    <div className="overflow-x-hidden px-4 sm:px-6">
      {" "}
      {/* Added horizontal padding to root */}
      <div
        className="w-full max-w-[1440px] mx-auto mt-5 border border-[#1C1D1C] rounded-t-[3rem] 
        p-4 lg:p-6 relative"
      >
        {" "}
        {/* Added bg-white for contrast */}
        {/* Main Content Container */}
        <div className="my-5 space-y-8 md:space-y-12">
          {/* First Section */}
          <div className="px-2 md:px-20">
            {" "}
            {/* Reduced horizontal padding on mobile */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-10">
              {/* Image Container with Constrained Width */}
              <div className="w-full max-w-[calc(100%-2rem)] lg:max-w-[600px]">
                <img
                  src={card1}
                  className="w-full h-auto object-cover rounded-xl border border-[#1C1D1C]"
                  alt="Evoca illustration"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col font-inter w-full max-w-[calc(100%-1rem)]">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8DA27] to-[#8F9C1C] text-2xl mb-4">
                  Evoca
                </h1>
                <p className="text-base md:text-lg">
                  s simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
            {/* Bottom Paragraph */}
            <p className="mt-6 md:mt-8 text-base md:text-lg w-full max-w-[calc(100%-2rem)] mx-auto">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Second Section */}
          <div className="px-2 md:px-20">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              {/* Image Container with Order Control */}
              <div className="w-full max-w-[calc(100%-2rem)] lg:max-w-[600px] lg:order-first">
                <img
                  src={card2}
                  className="w-full h-auto object-cover rounded-xl border border-[#1C1D1C]"
                  alt="Evoca illustration"
                />
              </div>

              {/* Text Content with Right Alignment */}
              <div className="flex flex-col font-inter w-full max-w-[calc(100%-1rem)] lg:text-right">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8DA27] to-[#8F9C1C] text-2xl mb-4">
                  Evoca
                </h1>
                <p className="text-base md:text-lg">
                  s simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>

            {/* Bottom Paragraph */}
            <p className="mt-6 md:mt-8 text-base md:text-lg w-full max-w-[calc(100%-2rem)] mx-auto">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
