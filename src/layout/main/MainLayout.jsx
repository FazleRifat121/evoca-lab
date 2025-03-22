import { Outlet } from "react-router";

import Footer from "../../shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div data-theme="black">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
