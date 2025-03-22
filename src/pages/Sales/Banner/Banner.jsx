import Cards from "./Cards/Cards";

const Banner = () => {
  return (
    <div>
      <div className="my-5 font-medium lg:my-20">
        <h1 className="text-2xl lg:text-4xl">Our Components</h1>
      </div>
      <div>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Banner;
