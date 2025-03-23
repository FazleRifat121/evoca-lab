import Navbar from "../../shared/Navbar/main/Navbar";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";

const Case = () => {
  return (
    <div className="container mx-auto p-4">
      <Navbar></Navbar>
      <Banner></Banner>
      <Cards></Cards>
    </div>
  );
};

export default Case;
