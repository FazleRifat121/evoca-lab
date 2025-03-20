const Banner = () => {
  return (
    <div className="md:ml-10 lg:ml-32 mt-20 lg:mt-0  h-[300px] lg:h-[600px] flex flex-col items-start justify-center">
      <div className=" flex items-center justify-center">
        <div className=" text-white w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 md:mb-8">
            <span className="lg:text-6xl font-thin"> Who is</span> <br />
            <span className="flex items-center gap-2 lg:gap-5 ">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8DA27] to-[#8F9C1C] text-5xl md:text-6xl lg:text-7xl xl:text-8xl block mt-4">
                Evoca
              </span>
              <span className="mt-5 lg:mt-10 text-4xl">Lab?</span>
            </span>
            <p className="text-sm text-[#d9d9d9a2] w-full md:w-[665px] text-justify mt-3">
              s simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially un
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
