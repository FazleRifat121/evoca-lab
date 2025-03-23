import Navbar from "../../shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";

const Videos = () => {
  return (
    <div className="container mx-auto p-4">
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="lg:ml-16">
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Videos;
