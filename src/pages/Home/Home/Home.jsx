import Banner from "./Banner/Banner";
import BannerSlider from "./BannerSlider/BannerSlider";
import Navbar from "../../../shared/Navbar/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <BannerSlider></BannerSlider>
    </div>
  );
};

export default Home;
