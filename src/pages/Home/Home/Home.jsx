import Banner from "./Banner/Banner";
import BannerSlider from "./BannerSlider/BannerSlider";
import Navbar from "../../../shared/Navbar/Navbar";
const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <Navbar></Navbar>
      <Banner></Banner>
      <BannerSlider></BannerSlider>
    </div>
  );
};

export default Home;
