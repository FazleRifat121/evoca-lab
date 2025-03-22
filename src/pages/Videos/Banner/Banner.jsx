import vid from "../../../assets/Videos/Electro-Light - Symbolism - Trap - NCS - Copyright Free Music.mp4";

const Banner = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-10 px-4 py-8 md:py-0 font-inter">
      {/* Text Container */}
      <div className="text-white md:w-1/2 lg:max-w-[600px] px-4 md:px-0 lg:mt-36 mt-5">
        <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light">
          Title of the Video
        </p>
        <p className="text-sm text-[#d9d9d9a2] mt-3 sm:mt-4 md:mt-6 max-w-[665px] text-justify">
          Short description of the video
        </p>
      </div>

      {/* Video Container */}
      <div className="w-full md:w-1/2 max-w-[750px] px-4 md:px-0">
        <video
          className="w-full h-auto rounded-xl shadow-xl"
          controls
          playsInline
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Banner;
