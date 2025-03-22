import Navbar from "../../shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Table from "./Table/Table";

const Sales = () => {
  return (
    <div className="container mx-auto p-4">
      <Navbar></Navbar>
      <Banner></Banner>
      <Table></Table>
    </div>
  );
};

export default Sales;
