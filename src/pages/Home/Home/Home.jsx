import img1 from "../../../assets/Home/logo.png";
import Search from "./Search/Search";
const Home = () => {
  return (
    <div className="max-w-screen mx-auto p-4 h-[100dvh]">
      <div className="flex justify-center items-center flex-col gap-5">
        <img src={img1} alt="logo" />
        <div className="text-body flex flex-col items-center justify-between">
          <div className="first-part text-center space-y-5">
            <h1 className="text-7xl font-extrabold">Evoca Labs</h1>
            <p className="text-lg font-semibold tracking-widest">
              Ai-Powered Memory Assistance
            </p>
          </div>
          <div className="second-part mt-20">
            <Search></Search>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
